import { expect, test } from "@playwright/test";

test.describe("Detect Draw", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("detects a draw when the last tile cannot result in a win", async ({ page }) => {
    // Draw sequence — board after 8 moves:
    // X | O | X
    // X | O | _ ← tile-5 is empty, next is X
    // O | X | O
    // Placing X at tile-5: row1=[X,O,X] no, col2=[X,X,O] no, no diag → draw
    await page.locator('[data-testid="tile-0"]').click(); // X
    await page.locator('[data-testid="tile-4"]').click(); // O
    await page.locator('[data-testid="tile-2"]').click(); // X
    await page.locator('[data-testid="tile-1"]').click(); // O
    await page.locator('[data-testid="tile-7"]').click(); // X
    await page.locator('[data-testid="tile-6"]').click(); // O
    await page.locator('[data-testid="tile-3"]').click(); // X
    await page.locator('[data-testid="tile-8"]').click(); // O

    const message = page.locator('[data-testid="game-message"]');
    await expect(message).toBeVisible();
    await expect(message).toHaveText("Draw!");
  });

  test("does not show draw when the last tile results in a win", async ({ page }) => {
    // Board after 8 moves:
    // X | O | X
    // O | X | O
    // O | X | _ ← tile-8 is empty, next is X
    // Placing X at tile-8: diagonal 0,4,8 = X,X,X → win!
    await page.locator('[data-testid="tile-0"]').click(); // X
    await page.locator('[data-testid="tile-1"]').click(); // O
    await page.locator('[data-testid="tile-4"]').click(); // X
    await page.locator('[data-testid="tile-3"]').click(); // O
    await page.locator('[data-testid="tile-2"]').click(); // X
    await page.locator('[data-testid="tile-5"]').click(); // O
    await page.locator('[data-testid="tile-7"]').click(); // X
    await page.locator('[data-testid="tile-6"]').click(); // O

    // One tile left but it would be a win — no draw message yet
    const message = page.locator('[data-testid="game-message"]');
    await expect(message).not.toHaveText("Draw!");

    // Click last tile — should show win, not draw
    await page.locator('[data-testid="tile-8"]').click(); // X wins diagonal
    await expect(message).toBeVisible();
    await expect(message).toHaveText("X has won!");
  });
});

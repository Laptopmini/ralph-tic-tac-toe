import { expect, test } from "@playwright/test";

test.describe("Detect Win", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("detects a row win for X", async ({ page }) => {
    // X takes top row: tiles 0, 1, 2
    // O takes tiles 3, 4
    await page.locator('[data-testid="tile-0"]').click(); // X
    await page.locator('[data-testid="tile-3"]').click(); // O
    await page.locator('[data-testid="tile-1"]').click(); // X
    await page.locator('[data-testid="tile-4"]').click(); // O
    await page.locator('[data-testid="tile-2"]').click(); // X wins top row

    const message = page.locator('[data-testid="game-message"]');
    await expect(message).toBeVisible();
    await expect(message).toHaveText("X has won!");
  });

  test("detects a column win for O", async ({ page }) => {
    // O takes left column: tiles 0, 3, 6
    // X takes tiles 1, 4, 8
    await page.locator('[data-testid="tile-1"]').click(); // X
    await page.locator('[data-testid="tile-0"]').click(); // O
    await page.locator('[data-testid="tile-4"]').click(); // X
    await page.locator('[data-testid="tile-3"]').click(); // O
    await page.locator('[data-testid="tile-8"]').click(); // X
    await page.locator('[data-testid="tile-6"]').click(); // O wins left column

    const message = page.locator('[data-testid="game-message"]');
    await expect(message).toBeVisible();
    await expect(message).toHaveText("O has won!");
  });

  test("detects a diagonal win", async ({ page }) => {
    // X takes diagonal: tiles 0, 4, 8
    // O takes tiles 1, 2
    await page.locator('[data-testid="tile-0"]').click(); // X
    await page.locator('[data-testid="tile-1"]').click(); // O
    await page.locator('[data-testid="tile-4"]').click(); // X
    await page.locator('[data-testid="tile-2"]').click(); // O
    await page.locator('[data-testid="tile-8"]').click(); // X wins diagonal

    const message = page.locator('[data-testid="game-message"]');
    await expect(message).toBeVisible();
    await expect(message).toHaveText("X has won!");
  });
});

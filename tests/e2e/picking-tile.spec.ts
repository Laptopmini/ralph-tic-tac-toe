import { expect, test } from "@playwright/test";

test.describe("Picking Tiles", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("clicking tiles alternates between X and O", async ({ page }) => {
    // First click should place X
    await page.locator('[data-testid="tile-0"]').click();
    await expect(page.locator('[data-testid="tile-0"]')).toHaveText("X");

    // Second click should place O
    await page.locator('[data-testid="tile-1"]').click();
    await expect(page.locator('[data-testid="tile-1"]')).toHaveText("O");

    // Third click should place X
    await page.locator('[data-testid="tile-2"]').click();
    await expect(page.locator('[data-testid="tile-2"]')).toHaveText("X");

    // Fourth click should place O
    await page.locator('[data-testid="tile-3"]').click();
    await expect(page.locator('[data-testid="tile-3"]')).toHaveText("O");
  });

  test("clicking an already-filled tile does not change its value", async ({ page }) => {
    // Place X on tile 0
    await page.locator('[data-testid="tile-0"]').click();
    await expect(page.locator('[data-testid="tile-0"]')).toHaveText("X");

    // Click tile 0 again — should still be X, not change to O
    await page.locator('[data-testid="tile-0"]').click();
    await expect(page.locator('[data-testid="tile-0"]')).toHaveText("X");

    // Next click on a different tile should still place O (turn not consumed)
    await page.locator('[data-testid="tile-1"]').click();
    await expect(page.locator('[data-testid="tile-1"]')).toHaveText("O");
  });
});

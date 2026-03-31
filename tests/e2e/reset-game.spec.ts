import { expect, test } from "@playwright/test";

test.describe("Reset Button", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("reset button is visible below the grid and clears all tiles", async ({ page }) => {
    const resetButton = page.locator('[data-testid="reset-button"]');
    await expect(resetButton).toBeVisible();
    await expect(resetButton).toHaveText("Reset");

    // Verify button has role of button
    await expect(resetButton).toHaveRole("button");

    // Place some values
    await page.locator('[data-testid="tile-0"]').click();
    await page.locator('[data-testid="tile-1"]').click();
    await page.locator('[data-testid="tile-4"]').click();
    await expect(page.locator('[data-testid="tile-0"]')).toHaveText("X");
    await expect(page.locator('[data-testid="tile-1"]')).toHaveText("O");
    await expect(page.locator('[data-testid="tile-4"]')).toHaveText("X");

    // Click reset
    await resetButton.click();

    // All tiles should be empty
    for (let i = 0; i < 9; i++) {
      await expect(page.locator(`[data-testid="tile-${i}"]`)).toHaveText("");
    }
  });

  test("reset button has correct styling", async ({ page }) => {
    const resetButton = page.locator('[data-testid="reset-button"]');
    await expect(resetButton).toBeVisible();

    // Check blue background and white text
    const bgColor = await resetButton.evaluate((el) => getComputedStyle(el).backgroundColor);
    const textColor = await resetButton.evaluate((el) => getComputedStyle(el).color);
    const borderRadius = await resetButton.evaluate((el) => getComputedStyle(el).borderRadius);

    // Background should be blue-ish (rgb where blue channel is dominant)
    expect(bgColor).toMatch(/rgb/);
    const [, r, g, b] = bgColor.match(/(\d+),\s*(\d+),\s*(\d+)/) || [];
    expect(Number(b)).toBeGreaterThan(Number(r));
    expect(Number(b)).toBeGreaterThan(Number(g));

    // Text should be white
    expect(textColor).toMatch(/rgb\(255,\s*255,\s*255\)/);

    // Should have rounded edges
    expect(Number.parseFloat(borderRadius)).toBeGreaterThan(0);
  });
});

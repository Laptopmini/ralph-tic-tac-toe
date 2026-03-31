import { expect, test } from "@playwright/test";

test.describe("3x3 Grid Layout", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders a 3x3 grid with 9 tiles", async ({ page }) => {
    const grid = page.locator('[data-testid="grid"]');
    await expect(grid).toBeVisible();

    const tiles = page.locator('[data-testid^="tile-"]');
    await expect(tiles).toHaveCount(9);

    // Verify all 9 tiles are visible
    for (let i = 0; i < 9; i++) {
      await expect(page.locator(`[data-testid="tile-${i}"]`)).toBeVisible();
    }
  });

  test("grid is centered and tiles are separated by thick black borders without outer perimeter", async ({
    page,
  }) => {
    const grid = page.locator('[data-testid="grid"]');
    await expect(grid).toBeVisible();

    const gridBox = await grid.boundingBox();
    const viewport = page.viewportSize();

    if (!gridBox || !viewport) {
      throw new Error("Grid bounding box or viewport is null");
    }

    // Grid should be roughly centered horizontally
    const gridCenterX = gridBox.x + gridBox.width / 2;
    const viewportCenterX = viewport.width / 2;
    expect(Math.abs(gridCenterX - viewportCenterX)).toBeLessThan(10);

    // Grid should have equal width and height
    expect(Math.abs(gridBox.width - gridBox.height)).toBeLessThan(5);

    // Grid should have at least 3rem (48px) margin on all sides
    expect(gridBox.x).toBeGreaterThanOrEqual(40);
    expect(gridBox.y).toBeGreaterThanOrEqual(40);

    // Tiles should be empty initially
    for (let i = 0; i < 9; i++) {
      const tile = page.locator(`[data-testid="tile-${i}"]`);
      await expect(tile).toHaveText("");
    }
  });
});

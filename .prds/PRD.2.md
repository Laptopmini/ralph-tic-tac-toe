# PRD: Tic-Tac-Toe app

3x3 grid, alternate X and O, detect win/draw, reset board. *(Great for testing array matrix logic).*

## Objective

We want to implement a classic game of Tic-Tac-Toe on the homepage of our website. Offering a 3x3 grid, alternating turns between X and O, detecting a win or draw and offering the ability to reset the board.

## Context

- All source code for the app should be declared under `src/`.
- The game will be presented to the user via `src/index.html`.

## Constraints

- Only modify or create source code under `src/`, you shouldn't need to install any dependencies.
- All test files must pass on first execution.

## Tasks

- [x] Create the 3x3 grid. Replace the homepage with a 3x3 grid. The grid is centered both vertically and horizontally. The grid is of equal width and height. The grid should maximize its size while keeping a 3rem margin all around. Each 9 tiles of the grid are separated from each other by a thick black border, forming a grid without an outer perimeter. The tiles are empty at this time. `[test: npx playwright test tests/e2e/grid-layout.spec.ts]`

- [x] Add a click event for tiles. When a tile is clicked by the user, it should render an `X` or `O`. By default, it renders an `X` and then sets the next value to be an `O`, effectively alternating between `X` and `O` as the tiles are clicked. For example, if there is one tile left, and the previous tile was set to `O`, then the next tile will be set to `X`. If a tile already has a value (i.e `X` or `O`), it ignores the click event. `[test: npx playwright test tests/e2e/picking-tile.spec.ts]`

- [x] Add a reset button. Below the grid, add a button with the label `Reset`. Keep the grid centered in the page, using as much height/width while respecting its original margin. When the button is clicked, all the tiles are cleared of their value (i.e. `X` or `O`), and the user can begin clicking on tiles that were previously set. Add rounded edges to the button, a blue background, white text and darker blue on hover. `[test: npx playwright test tests/e2e/reset-game.spec.ts]`

- [x] Detect a win. Under certain conditions, the game ends and is won. If 3 tiles on the same row have the same value, it's a win. If 3 titles in the same column have the same value, it's a win. If 3 titles are on the same diagonal across the grid, it's a win. If a win occurs, present a message below the reset button saying which value triggered a winning condition and therefore won the game. For example, if the 3 tiles across the middle row have `X` as a value, this is a win, and the message would be `X has won!`. If it was `O`, the message would be `O has won!`. `[test: npx playwright test tests/e2e/detect-win.spec.ts]`

- [x] Detect a draw. When there is only one tile left without a value, calculate if the next value would result in a win, under the previously described conditions. If the next value cannot result in a win, present a message saying `Draw!`. The message should be presented in the same location as the existing game-winning message, below the reset button. `[test: npx playwright test tests/e2e/detect-draw.spec.ts]`

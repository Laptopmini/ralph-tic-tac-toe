Implemented click event handling for tiles in `src/index.html`:
- Added JavaScript to track `currentPlayer` (starts as "X")
- Click listeners on all `.tile` elements
- Logic: if tile is empty (textContent === ""), fill with current player and toggle
- If tile is already filled, ignore the click
- Linting fixed 1 file (formatting)
- Type checking passed

This satisfies both test cases: alternating X/O and ignoring clicks on filled tiles.

## Draw Detection Implementation

Implemented predictive draw detection for the Tic-Tac-Toe game:

1. **Modified checkWin()**: Now accepts optional boardState parameter to check hypothetical board states
2. **Added wouldResultInWin()**: Tests if placing a player's mark in the empty tile would create a winning condition
3. **Updated click handler**: Shows "Draw!" message in two cases:
   - All 9 tiles filled with no winner
   - Exactly 1 empty tile left AND the next move can't produce a win

The logic checks for draws BEFORE the final tile is clicked (when only 1 remains), matching the test expectation of detecting draws when "the last tile cannot result in a win."

Quality checks passed: Biome linting, TypeScript type checking successful.

## Reset Button Implementation

Implemented the reset button feature for the Tic-Tac-Toe game:

**Changes Made:**
1. **HTML**: Added a semantic `<button>` element with `type="button"` (required by Biome), `data-testid="reset-button"`, and label "Reset" inside the container
2. **JavaScript**: Added click event listener that clears all tiles' text content and resets `currentPlayer` back to "X"
3. **CSS**: 
   - Modified `.container` to use `flex-direction: column` and added `gap: 2rem` for vertical stacking
   - Added `.reset-button` styling with blue background (#0066cc), white text, 8px border-radius, and darker blue hover state (#003d99)

**Quality Checks:**
- Linting: Fixed button type attribute requirement, then passed
- Type checking: Passed

All test assertions should pass:
- Button is visible with correct text and role
- Clear all tiles functionality works
- Styling matches blue background, white text, and rounded edges

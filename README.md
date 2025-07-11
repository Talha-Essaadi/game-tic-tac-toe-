## Game Logic Breakdown
```sh
Board Setup

The board is a 3x3 grid = 9 cells.

Each cell can contain: 'X', 'O', or be empty.

Turn-Based Play

Player X and O alternate turns.

On each turn, the player places their mark on an empty cell.

Win Checking

After every move, check if the player has 3 in a row in:

Any of 3 rows

Any of 3 columns

Any of 2 diagonals

There are 8 possible winning combinations.

Draw Checking

If all 9 cells are filled without any winner, it’s a draw.

Restart Game

Clear all cells and reset turn tracker to restart the game.
```

## Fonts :
```css
.text {
    font-family: "Permanent Marker" , cursive;
}

```
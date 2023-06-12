# MineSweeper

Establish a react front-end minesweeper game board with in-memory game data.
Establish basic game logic that enforces the above game rules on a 10x10 board.
Each cell is an object that stores pertinent information for that cell (ie. wasClicked, isBomb, adjacentBombCount...)
One way to store these values to keep track of position is an adjacency matrix  .
One could also have a property pointing to adjacent cells directly on the cell object.
If you are stuck on the game logic, be sure to ask for assistance. You should not be struggling for too long on this section.
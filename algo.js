/////// still to do
// * game starts after click on button
// * re-implement user can click on board to create game
// * game recognizes when it ends (arr === newArr, or perhaps even a simple repeat ())

// The universe of the Game of Life is an infinite two-dimensional orthogonal
// grid of square cells, each of which is in one of two possible states,
// alive or dead, or "populated" or "unpopulated". Every cell interacts with its
// eight neighbours, which are the cells that are horizontally, vertically,
// or diagonally adjacent. At each step in time, the following transitions occur:
//
// 1) Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
// 2) Any live cell with two or three live neighbours lives on to the next generation.
// 3) Any live cell with more than three live neighbours dies, as if by overpopulation.
// 4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
//
// The initial pattern constitutes the seed of the system. The first generation
// is created by applying the above rules simultaneously to every cell in the
// seed—births and deaths occur simultaneously, and the discrete moment at which
// this happens is sometimes called a tick
// (in other words, each generation is a pure function of the preceding one).
//
//  The rules continue to be applied repeatedly to create further generations.
//
// *** from Codaisseur
// https://reader.codaisseur.com/courses/intermediate-bootcamp-228c9185-0564-4394-84aa-50f86517c6e2/132/javascript-labs/lab-1-conway-s-game-of-life
// Implement a single cell. A cell should be square box of a few pixels with a border.
//
// Create css classes that make them alive (black background) or dead (white)
//
// Implement a Game board. Ideally you will have two constants (like X and Y) and
// generate a board of X*Y cells (<- multidimensional array).
// The whole game board should be displayed in the browser,
// looking somewhat like the picture at the top of this page
//
// * Write a while(true) loop which will be your main game ‘runner’, ultimately it
// will implement all the game rules but lets start simple.
// Maybe start with making it select a random (<- don’t know how? Google knows!)
// tile in your game board and toggle its state (live/dead). After every cycle,
// make your runner sleep for a little while.
//
// * Allow users to click on cells before the game starts, so they can set an initial setup.
//
// Implement the actual game rules. You will have to loop (twice for multidimensional)
// over your entire board. Implement one rule at a time and make sure it works correctly.
// Think of good initial setups that allow you to test the behaviour.
// Or write tests that do it for you :)
//
// * When all that ^ works, write logic that checks if the game is ‘over’

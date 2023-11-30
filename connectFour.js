// Define constants
const ROWS = 6;
const COLS = 7;
const EMPTY_SLOT = "⚪"; // Empty slot emoji
const RED = "🔴"; // Red circle emoji
const YELLOW = "🟡"; // Yellow circle emoji

// Initialize the board as a 2D array
let board = [];
for (let i = 0; i < ROWS; i++) {
  board.push(Array.from({ length: COLS }, () => EMPTY_SLOT));
}

// Function to create and display the board
function createBoard() {
  const boardElement = document.getElementById("board");

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.textContent = board[row][col];
      boardElement.appendChild(cell);
    }
  }
}

// Function to drop a token into the column
function dropToken(col) {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (board[row][col] === EMPTY_SLOT) {
      board[row][col] = currentPlayer;
      return { row, col };
    }
  }
  return null;
}

// Function to handle click on a column cell
function handleColumnClick(event) {
  const col = event.target.dataset.col;
  const result = dropToken(col);

  if (result) {
    const cell = document.querySelector(`[data-row="${result.row}"][data-col="${result.col}"]`);
    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === RED ? YELLOW : RED;
    // Implement win-checking logic here
  }
}

// Event listener for column clicks
document.getElementById("board").addEventListener("click", handleColumnClick);

// Initialize the game
let currentPlayer = RED;
createBoard();
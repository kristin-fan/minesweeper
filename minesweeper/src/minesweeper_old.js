const printBoard = board => {
    // Log 'Current Board: 
    console.log('Current Board:');

    // Log the first element of the board variable
    console.log(board[0].join(' | '));
    console.log(board[1].join(' | '));
    console.log(board[2].join(' | '));
};

let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '], 
    [' ', ' ', ' ']
];

printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);
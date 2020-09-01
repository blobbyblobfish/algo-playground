/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
    for (let row = 0; row < board.length; row++) {
        
        if (board[row].includes(word[0])) {
            
            const column = board[row].indexOf(word[0])
            
            word = word.slice(1)

            const found = searchUpDownLeftRight(board, word, row, column)
            
            console.log("searchUpDownLeftRight", found)
                        
            if (found) {
                return found
            }
        }
    }
        
    return false
};

function searchUpDownLeftRight(board, word, row, column) {
    const letter = word[0]
    word = word.slice(1)
    board[row][column] = 0
    
    if (word === "") {
        return true
    }
        
    if (column < board[row].length - 1) {
        if (board[row][column + 1] === letter) {
            searchUpDownLeftRight(board, word, row, column + 1)
        }
    }
    
    if (column > 0) {
        if (board[row][column - 1] === letter) {
            searchUpDownLeftRight(board, word, row, column - 1)
        }
    }
    
    if (row > 0) {
        if (board[row - 1][column] === letter) {
            searchUpDownLeftRight(board, word, row - 1, column)
        }
    }
    
    if (row < board.length - 1) {
        if (board[row + 1][column] === letter) {
            searchUpDownLeftRight(board, word, row + 1, column)
        }
    }
    
    console.log(letter, "this function is about to return")
    return false
}
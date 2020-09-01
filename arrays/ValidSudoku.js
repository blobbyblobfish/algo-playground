/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
    let valid = true
    
    for (let column = 0; column < 9; column++) {
        let boardColumn = []
        
        for (let row = 0; row < 9; row++) {
            let uniqueRow = new Set(board[row])
            uniqueRow.delete(".")
            
            uniqueRow.forEach(val => {
                if (duplicateFinder(val, board[row])) { 
                    valid = false
                }
            })
            
            boardColumn.push(board[row][column])
        }
        
        let uniqueColumn = new Set(boardColumn)
        uniqueColumn.delete(".")
        
        uniqueColumn.forEach(val => {
            if (duplicateFinder(val, boardColumn)) { 
                valid = false
            }
        })
    }
        
    return valid
};

function duplicateFinder(val, array) {
    if (array.filter(cell => cell === val).length > 1) {
        return true
    }
}

//https://leetcode.com/problems/valid-sudoku/
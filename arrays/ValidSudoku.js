/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
    let valid = true
    
    for (row = 0; row < board.length; row++) {
        let uniqueRow = new Set(board[row])
        uniqueRow.delete(".") //remove empty value
        
        console.log(uniqueRow == board[row])
                
        uniqueRow.forEach(val => {
            if (duplicateFinder(val, board[row])) { 
                valid = false
            }
        })
    }
        
    return valid
};

function duplicateFinder(val, array) {
    
    console.log(array.filter(cell => cell === val))
        
    if (array.filter(cell => cell === val).length > 1) {
        console.log("duplicate found")
        return true
    }
}

//https://leetcode.com/problems/valid-sudoku/
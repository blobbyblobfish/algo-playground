/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[row].length; column++) {
                        
            if (board[row][column] === word[0]) {
                console.log(row, column)

                let wordCopy = word.slice(1)
                let boardCopy = Array.from(board)
                let boardCopyRow = row
                let boardCopyColumn = column

                while (wordCopy) {
                    letter = wordCopy[0]

                    boardCopy[boardCopyRow][boardCopyColumn] = 0

                    if (wordCopy === "") {
                        return true
                    }

                    console.log(letter)

                    // search right
                    if (boardCopyColumn < board[row].length - 1) {
                        if (boardCopy[boardCopyRow][boardCopyColumn + 1] === letter) {
                            console.log("found", letter)
                            wordCopy = wordCopy.slice(1)
                            boardCopyColumn = boardCopyColumn + 1
                            continue
                        }
                    }

                    // search left
                    if (boardCopyColumn > 0) {
                        console.log(letter, boardCopyRow, boardCopyColumn - 1)
                        if (boardCopy[boardCopyRow][boardCopyColumn - 1] === letter) {
                            console.log("found", letter)
                            wordCopy = wordCopy.slice(1)
                            boardCopyColumn = boardCopyColumn - 1
                            continue
                        }
                    }

                    // search up
                    if (boardCopyRow > 0) {
                        if (boardCopy[boardCopyRow - 1][boardCopyColumn] === letter) {
                            console.log("found", letter)
                            wordCopy = wordCopy.slice(1)
                            boardCopyRow = boardCopyRow - 1
                            continue
                        }
                    }

                    // search down
                    if (boardCopyRow < board.length - 1) {
                        if (boardCopy[boardCopyRow + 1][boardCopyColumn] === letter) {
                            console.log("found", letter)
                            wordCopy = wordCopy.slice(1)
                            boardCopyRow = boardCopyRow + 1
                            console.log("row of found letter", boardCopyRow)
                            continue
                        }
                    }

                    console.log("not found")                
                    break
                }
            }
        } 
    }
        
    return false
};

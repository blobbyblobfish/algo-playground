// https://www.geeksforgeeks.org/minimum-swaps-required-sort-binary-array/

// <!DOCTYPE html>
// <html>
// <head>
// <title>Page Title</title>
// </head>
// <body>
// <h2>Welcome To GFG</h2>
// <p>Default code has been loaded into the Editor.</p>
// </body>
// <script>
    function sortBinaryArray(array) {
        let swaps = 0
        let i = 0
        const input = [0, 0, 1, 0, 1, 0, 1, 1]
        
        while (i + 1< array.length) {
            if (array[i] > array[i + 1]) {
                [array[i]]
            }
            
            i++
        }
        
        return swaps
    }
    
    console.log(sortBinaryArray(input))
// </script>
// </html>
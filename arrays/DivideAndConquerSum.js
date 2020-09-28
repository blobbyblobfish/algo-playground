const example = [2,4,6]

function sum(arr) { //[4, 6]
    if (arr.length === 0) {
        return 0
    } 

    return arr[0] + sum(arr.slice(1)) // 2 + sum[4, 6]
}
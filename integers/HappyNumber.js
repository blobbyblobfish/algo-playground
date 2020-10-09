// https://leetcode.com/problems/happy-number/

var isHappy = function (n) {
    let arr = n.toString().split('')
    let happy = n === 1 ? true : false
    
    //reassign n to the sum of the square of each element in arr
    //have an if statement bail out the loop if the number is unhappy
    if (n !== 1) {        
        let sum = 0
        let i = 0
        
        while (i < arr.length) {
            sum += arr[i] * arr[i]
            i++
        }
        
        n = sum
        
        isHappy(n)
    } 
        
    return happy
};
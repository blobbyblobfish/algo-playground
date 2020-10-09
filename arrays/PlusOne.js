// https://leetcode.com/problems/plus-one/

var plusOne = function (digits) { 
    
    // base case
    if (digits.length === 0) { //[0]
        return digits
    }
    
    let last = digits.pop() //0
    
    if (last === 9) {
        last = 0
        
        if (digits.length === 0) { //[]
            digits = digits.push(0)
        }
                
        //recursively add one
        plusOne(digits).push(last) // [...,0 0]
    }
    
    else {
        digits.push(last + 1)
    }
    
    return digits //[1]
};
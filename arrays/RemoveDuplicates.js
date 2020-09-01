var removeDuplicates = function (nums) {
    
    let i = 0
    let currentNumber = nums[0]
    let nextNumber = nums[1]
        
    while (i < nums.length - 1) {
        nextNumber = nums[i + 1]
        
        if (currentNumber === nextNumber) {
            nums.splice(i + 1, 1)
        }
        
        else {
            currentNumber = nextNumber
            i++
        }
    }
    
};

//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
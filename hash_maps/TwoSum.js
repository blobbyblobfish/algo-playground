/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [0,2,7,11,15,20], target = 17
Output: [1,4]
*/

// SOLUTION 3: ABSOLUTE OPTIMIZATION
function twoSum(array, target) {
    let hashMap = {};
    
    // [0,2,7,11,15,20] 
    // hashMap ---> { 0: 0, 2: 1, 7: 2 ...}
    
    let i = 0
    while (i < array.length) {
        
        let partner = target - array[i]
        if (hashMap[partner]) return [hashMap[partner], i]
        hashMap[array[i]] = i
        i++
    }
    
    
}

// SOLUTION 2: TRADE OFF OPTIMIZATION
function twoSum(array, target) {
    // two loops
}

/*
i=0; num=0
j=1; compare=2. check(compare+num==target)
j=2;.....j=length

i=1;
j=2;.....j=length
*/

// SOLUTION 1: BRUTE FORCE
function twoSum(array, target) {
    let i = 0
    while (i < array.length) {

        let num = array[i]

        let j = i + 1
        while (j < array.length) {
            let compare = array[j]
            if (num + compare === target) return [i, j]

            j++
        }
        
         i++
    }
}
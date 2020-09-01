var removeElement = function(nums, val) {
    while (nums.includes(val)) {
        nums.splice(nums.indexOf(val), 1)
        removeElement(nums, val)
    }
};

//https://leetcode.com/problems/remove-element/
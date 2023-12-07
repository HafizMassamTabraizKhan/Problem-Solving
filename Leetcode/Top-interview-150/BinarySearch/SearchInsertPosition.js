var searchInsert = function(nums, target) {
    if (nums[nums.length - 1] < target){
        return nums.length;
    }
    return nums.findIndex(num => num >= target);
};
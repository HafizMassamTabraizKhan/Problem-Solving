var removeElement = function(nums, val) {
    let newArray = nums.filter(element => element !== val);
    for (let i = 0; i < newArray.length; i++) {
        nums[i] = newArray[i];
    }
    return newArray.length;
};
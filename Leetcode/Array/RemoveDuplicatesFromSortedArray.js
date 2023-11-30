var removeDuplicates = function(nums) {
    let newArray = Array.from(new Set(nums));
    for (let i = 0; i < newArray.length; i++) {
        nums[i] = newArray[i];
    }
    return newArray.length;
};
var rotate = function(nums, k) {
    k = k % nums.length;

    const rotatedPart = nums.splice(nums.length - k);
    console.log(nums)
    nums.unshift(...rotatedPart);
};
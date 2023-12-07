var twoSum = function(nums, target) {
    //nums = nums.sort((a, b) => a - b);
    const max = Math.max(...nums);

    for(let i = 0; i < nums.length-1; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j]  === target){
                return [i,j];
            }
        }
    }
};
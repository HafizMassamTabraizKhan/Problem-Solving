var merge = function(nums1, m, nums2, n) {
    let output = []
    for(let i = 0; i<m; i++){
        output.push(nums1[i])
    }
    
    for(let j = 0; j<n;j++){
        output.push(nums2[j])
    }
    
    output.sort((a,b) => a-b)
    for(let i = 0;i<output.length;i++){
        nums1[i] = output[i]
    }
    
    return nums1
};
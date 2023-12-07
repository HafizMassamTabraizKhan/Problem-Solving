var lengthOfLongestSubstring = function(s) {

    // Average/Beginner Solution

    let lsub = '';
    let temp = '';

    for(let i = 0; i < s.length; i++){
        let temp1 = '';
        temp = s[i];
        for(let j = i+1; j < s.length; j++){
            if(s[i] !== s[j] && !temp1.includes(s[j])){
                temp += s[j];
                if(temp.length > temp1.length){
                    temp1 = temp;
                }
            }
            else{
                break;
            }
        }
        if(lsub.length === 0){
            lsub = temp;
        }
        if(temp1.length > lsub.length){
            lsub = temp1;
        }
    }
    return lsub.length;

    // Good Solution

    // let set = new Set();
    // let left = 0;
    // let maxSize = 0;

    // if (s.length === 0) return 0;
    // if (s.length === 1) return 1;

    // for (let i = 0; i < s.length; i++) {

    //     while (set.has(s[i])) {
    //         set.delete(s[left])
    //         left++;
    //     }
    //     set.add(s[i]);
    //     maxSize = Math.max(maxSize, i - left + 1)
    // }
    // return maxSize;
};
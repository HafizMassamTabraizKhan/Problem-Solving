var candy = function(ratings) {
    let n = ratings.length;
    let candies = Array(n).fill(1);
    for(let i = 0; i < n; i++){
        if (ratings[i] > ratings[i-1]){
            candies[i] = candies[i-1] + 1;
        }
    }

    for(let i = n - 2; i >= 0; i--){
        if (ratings[i] > ratings[i+1]){
            candies[i] = Math.max(candies[i],candies[i+1] + 1);
        }
    }
    
    const sum = candies.reduce((accumulator, currentValue) => {
        return accumulator + currentValue; // 1
    }, 0);
    return sum;
};
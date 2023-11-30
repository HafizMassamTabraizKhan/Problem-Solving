var plusOne = function(digits) {
    let bigInt = BigInt(digits.join('')) + 1n;
    return String(bigInt) .split('') .map(Number);
};
const isEven = function(n) {
    
    if (n < 0) n *= -1;

    if (n === 0) {
        return true;
    }
    else if (n === 1) {
        return false;
    }
    else {
        return isEven(n-2);
    }
}

console.log(isEven(4));
console.log(isEven(101));
console.log(isEven(-10));
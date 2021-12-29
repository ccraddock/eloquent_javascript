function minimum(arg1, arg2) {
    let result = arg2;
    if (arg1 <= arg2){
        result = arg1;
    }
    return result;
}

const minimum2 = function(arg1, arg2) {
    return arg1 <= arg2 ? arg1 : arg2; 
}

const minimum3 = (arg1, arg2) => arg1 <= arg2 ? arg1 : arg2;

console.log(minimum('a','b'));
console.log(minimum(15, 10));
console.log(minimum(100, 'a'));

console.log('second set');
console.log(minimum2('a','b'));
console.log(minimum2(15, 10));
console.log(minimum2(100, 'a'));

console.log('third set');
console.log(minimum3('a','b'));
console.log(minimum3(15, 10));
console.log(minimum3('C', 'abc'));
function range(start, end, step=1) {
    let rangeValues = [];

    if ((step > 0) && ( start <= end )){
        for( let value = start; value <= end; value+=step){
            rangeValues.push(value);
        }
    }
    else if ((step < 0) && ( start >= end )){
        for( let value = start; value >= end; value+=step){
            rangeValues.push(value);
        }
    }
    return rangeValues;
}

function sum(numbers) {
    let runningSum = 0;
    for( let number of numbers){
        runningSum += number;
    }

    return runningSum;
}

console.log(range(1,20));
console.log(range(21,20));
console.log(range(5,5));
console.log(range(1,20,2));
console.log(range(1,20,0));
console.log(range(1,20,-2));
console.log(range(20,1,-1));
console.log(sum(range(1,20,1)));
console.log(sum(range(20,1,-1)));
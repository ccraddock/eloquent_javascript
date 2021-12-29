function reverseArray(array){
    let newArray = [];
    for(let arrayVal of array){
        newArray.unshift(arrayVal);
    }

    return newArray;
}

function reverseArrayInPlace(array){
    let halfWayPoint = Math.floor(array.length/2);
    for(let index = 0; index < halfWayPoint; index++){
        let tempValue = array[index];
        array[index] = array[array.length-1-index];
        array[array.length-1-index] = tempValue;
    }
}

let array1 = [1,3,5,7,9];
console.log('array 1: ' + array1);
let array2 = [2,4,6,8];
console.log('array 2: ' + array2);
let array3 = reverseArray(array1);
console.log('array 3: ' + array3);
let array4 = reverseArray(array2);
console.log('array 4: ' + array4);

reverseArrayInPlace(array1);
console.log('reversed array 1: ' + array1);
reverseArrayInPlace(array2);
console.log('reversed array 2: ' + array2);

reverseArrayInPlace(array1);
console.log('reversed reversed array 1: ' + array1);
reverseArrayInPlace(array2);
console.log('reversed reversed array 2: ' + array2);


function prepend(objectToAdd, list){
    return {value: objectToAdd, rest: list};
}

function nthRecursive(index, list){
    if( list != null )
    {
        if(index > 0){
            return nthRecursive(index-1, list.rest);
        }
        if(index == 0){
            return list.value;
        }
    }
    return undefined;
}

function nth(index, list){
    let returnValue = undefined;
    if(list != null){
        while(index > 0 && list != null){
            index--;
            list = list.rest;
        }
        if(index == 0 && list != null){
            returnValue = list.value;
        }
    }
    return returnValue;
}

function arrayToList(array){
    let list = null;
    while(array.length > 0){
        list = prepend(array.pop(), list);
    }
    return list;
}

function listToArray(list){
    if(list != null){
        return [list.value].concat(listToArray(list.rest));
    }
    else {
        return [];
    }
}

function printList(list){
    if(list != null){
        console.log(list.value);
        printList(list.rest);
    }
}

let array1 = [1,3,5,7,9];
console.log(array1);
let list = arrayToList(array1);
printList(list);
console.log("0 " + nth(0, list));
console.log("3 " + nth(3, list));
console.log("4 " + nth(4, list));
console.log("5 " + nth(5, list));

console.log("0 " + nthRecursive(0, list));
console.log("3 " + nthRecursive(3, list));
console.log("4 " + nthRecursive(4, list));
console.log("5 " + nthRecursive(5, list));

let array2 = listToArray(list);
console.log(array2);

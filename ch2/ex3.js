let size = 15;
let testString = '';

for(let outerIndex = 0; outerIndex < size; outerIndex++){
    let evenOdd = outerIndex % 2;

    for(let innerIndex = 0; innerIndex < size; innerIndex++){
        testString += innerIndex % 2 === evenOdd ? " " : "#"; 
    }
    testString += "\n";
}

console.log(testString);

// console.log(testString);
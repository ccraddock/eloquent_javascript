// function countBs(testString){
//     let numBs = 0;
//     for(let charIndex=0; charIndex<testString.length; charIndex++){
//         if(testString[charIndex] === 'B'){
//             numBs++;
//         }
//     }
//     return numBs;
// }

function countBs(testString){
    return countChar(testString, 'B');
}

console.log('Number of beans in \'Mrs. Butterworth\' = ' + countBs('Mrs. Butterworth'));
console.log('Number of beans in \'BUBBA GUMP\' = ' + countBs('BUBBA GUMP'));
console.log('Number of beans in \'Cameron Craddock\' = ' + countBs('Cameron Craddock'));

function countChar(testString, targetChar){
    let numChars = 0;
    for(let charIndex = 0; charIndex < testString.length; charIndex++){
        if (testString[charIndex] === targetChar){
            numChars++;
        }
    }
    return numChars;
}
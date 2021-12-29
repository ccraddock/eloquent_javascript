function deepCompare(firstValue, secondValue){

    let returnValue = true;

    if (typeof firstValue === "object" && firstValue !== null){
        if (typeof secondValue === "object" && secondValue !== null){

            let distinctObjectKeys = Object.keys(firstValue);

            for(let objectKey of Object.keys(secondValue)){
                if (!distinctObjectKeys.includes(objectKey)){
                    returnValue = false;
                    break;
                }
            }

            if(returnValue === true){
                for(let objectKey of distinctObjectKeys){
                    returnValue = returnValue && deepCompare(firstValue[objectKey], secondValue[objectKey]);
                    if (returnValue === false)
                    {
                        break;
                    }
                }
            }
        }
    }
    else {
        returnValue = (firstValue === secondValue);
    }

    return returnValue;
}


console.log("dog to dog " + deepCompare('dog', 'dog'));
console.log("cat to dog " + deepCompare('cat', 'dog'));
console.log("null to dog " + deepCompare(null, 'dog'));
console.log("null to null " + deepCompare(null, null));
console.log("dog, tyler to cat, boots " + deepCompare({type:'dog', name:'tyler'}, {type:'cat', name:'boots'}))
console.log("dog, tyler to dog, tyler " + deepCompare({type:'dog', name:'tyler'}, {type:'dog', name:'tyler'}))
console.log("dog, tyler to dog, tyler, 21 " + deepCompare({type:'dog', name:'tyler'}, {type:'dog', name:'tyler', height: 21}))
console.log("dog, tyler, 21, 12, to dog, tyler, 21 " + deepCompare({type:'dog', name:'tyler', height: 21, weight: 12}, {type:'dog', name:'tyler', height: 21}))

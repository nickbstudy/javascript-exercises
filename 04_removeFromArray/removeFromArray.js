const removeFromArray = function(initArray, ...toRemove) {
    
    const finalArray = initArray;

    for (item of toRemove) {
        if (finalArray.includes(item)) {
            finalArray.splice(finalArray.indexOf(item), 1);
        }
    }

    return finalArray

};

// Do not edit below this line
module.exports = removeFromArray;

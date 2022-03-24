const reverseString = function(toReverse) {

    // define an empty array
    // define empty string
    const charsToReverse = [];
    let reversed = "";

    // loop length of string times, adding each letter to the array
    for (let position = 0; position < toReverse.length; position++) {
        charsToReverse.push(toReverse.charAt(position))
    }

    // loop array by length, adding last char to string each time (reverse index)
    for (let position = (charsToReverse.length - 1); position >= 0; position--) {
        reversed += charsToReverse[position];
    }

    return reversed;

};

// Do not edit below this line
module.exports = reverseString;

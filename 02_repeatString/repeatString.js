const repeatString = function(text, num) {
    let returning = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            returning += text;
        }
        return returning;
    } else return "ERROR"
    
};

// Do not edit below this line
module.exports = repeatString;

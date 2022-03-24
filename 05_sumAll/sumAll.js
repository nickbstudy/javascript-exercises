const sumAll = function(first, second) {
    
    let total = 0;

    if (typeof first != 'number') {
        return "ERROR"
    }
    if (typeof second != 'number') {
        return "ERROR"
    }

    if (first >= 0 && second >= 0) {

        if (first < second) {
            for (let i = first; i <= second; i++) {
                total += i;
            }
        } else if (first > second) {
            for (let i = second; i <= first; i++) {
                total += i;
            }
        } else if (second == first) {
            total = first + second;
        }
        
        return total;

    } else return "ERROR"

};

// Do not edit below this line
module.exports = sumAll;

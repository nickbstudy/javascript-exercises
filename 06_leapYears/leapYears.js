const leapYears = function(year) {

    if (typeof year == "number") {

        if (year % 4 == 0) {
            if (year % 100 == 0) {
                return (year % 400 == 0 ? true : false)
            }
            return true
        } else return false;

    } else return "ERROR";

};

// Do not edit below this line
module.exports = leapYears;

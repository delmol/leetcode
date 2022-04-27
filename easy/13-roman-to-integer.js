/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    var romanDict = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    var romanStr = s.split("");
    var numericalInt = 0

    for (var i = 0; i < s.length; i++) {
        cVal = romanDict[romanStr[i]];

        if(romanDict[romanStr[i + 1]] > cVal) {
            numericalInt -= cVal;
        } else{
            numericalInt += cVal;
        }
    }

    return numericalInt;
};

// takes 2 positive integers and returns the sum of every integer between (and including) them
// indentation 2 or 4?
const sumAll = function(start, end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    let numOfInt = Math.abs(end - start) + 1;
    return (start + end) * numOfInt / 2;
    // let sum = 0;
    // for (let i = start; i <= end; i++) {
    //     sum += i;
    // }
    // return sum;
};

// Do not edit below this line
module.exports = sumAll;

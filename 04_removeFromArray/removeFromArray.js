// ([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
const removeFromArray = function(array, ...args) {
    const newArray = [];
    for (const item of array) {
        if (args.includes(item)) {
            continue;
        }
        newArray.push(item);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

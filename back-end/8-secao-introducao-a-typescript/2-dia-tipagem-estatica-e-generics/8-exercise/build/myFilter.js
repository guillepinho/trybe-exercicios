"use strict";
const myFilter = (array, func) => {
    const newArray = [];
    array.forEach((element, index, array) => {
        if (func(element, index, array)) {
            newArray.push(element);
        }
    });
    return newArray;
};
console.log(myFilter([1, 2, 3], (item, index, array) => item < 3));

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number);

console.log(sumNumbers); // 113

///////

const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
    console.log(accumulator);
    return accumulator + number;
};

const sumNumbers2 = collection.reduce(getSum);
const sumNumbers3 = collection.reduce(getSum, 1);
console.log(sumNumbers2); // 15
console.log(sumNumbers3); // 16


///////

const numbers2 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers2.reduce(getBigger, 0);
console.log(bigger); // 85

///////

const numbersEvenNOdd = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getOdds = (acc, cur) => ((cur % 2 === 0) ? acc + cur : acc);

const sumOdds = numbersEvenNOdd.reduce(getOdds, 0);

console.log(sumOdds);
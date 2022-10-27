const fun = (num1, num2, num3) => {
  const number = [num1, num2, num3];
  const checkNum = number.every((num) => typeof(num) === 'number');

  const promise = new Promise((resolve, reject) => {
    if (!checkNum) reject(new Error('Please, inform just numbers.'));
    const result = (num1 + num2) * num3;
    if (result <= 50) reject(new Error('Number is lower than 50.'));
    resolve(result);
  });

  return promise;
};

module.exports = fun;
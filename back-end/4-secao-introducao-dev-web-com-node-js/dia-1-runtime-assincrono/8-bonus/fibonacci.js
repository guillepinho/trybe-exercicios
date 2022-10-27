const fibonnaci = (number) => {
  const array = [1, 2];
  for (let i = 3; i <= number; i += 1) {
    array.push(array[array.length - 1] * 2);
  }
  console.log(array);
};

module.exports = fibonnaci;
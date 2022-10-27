const rl = require('readline-sync');
const fibonnaci = require('./fibonacci');
const fun = require('./fun');

const main = () => {
  const num = rl.questionInt('How many fibonacci numbers you want to see? ');

  if (num < 2) console.log('The number has to be bigger than 1.');
  else fibonnaci(num);
};

const main2 = async () => {
  const num1 = rl.questionInt('Tell me a number: ');
  const num2 = rl.questionInt('Another number: ');
  const num3 = rl.questionInt('And another: ');

  try {
    console.log(await fun(num1, num2, num3));
  } catch (e) {
    console.log(e.message);
  }
  
}

main2();
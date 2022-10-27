const readline = require('readline-sync');

const bmi = (weight, height) => Number((weight / ((height/100)**2)).toFixed(2));

const bmiResult = () => {
  const weight = readline.questionFloat('Whats your weight in kilos?');
  const height = readline.questionInt('Whats your height in centimeters?');

  const result = bmi(weight, height);

  let analyze = 'Take care, you\'re underweight';
  if (result >= 40) analyze = 'Take care, you\'re in Obesity Grade III or IV';
  else if (result >= 35) analyze = 'Take care, you\'re in Obesity Grade II';
  else if (result >= 30) analyze = 'Take care, you\'re in Obesity Grade I';
  else if (result >= 25) analyze = 'Take care, you\'re overweight';
  else if (result >= 18.5) analyze = 'Great! You\'re in great shape';

  console.log(`Your BMI index is ${result}. ${analyze}.`);
}

bmiResult();
const readline = require('readline-sync');

const massTable = {
  kg: 1000,
  hg: 100,
  dag: 10,
  g: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001
};

const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
const unitsValue = [1000, 100, 10, 1, 0.1, 0.01, 0.001];

function convert(measure: number, baseUnit: number, convertUnit: number): number {
  const base = unitsValue[baseUnit];
  const to = unitsValue[convertUnit];
  const exponent = base / to;
  return measure * exponent;
};

function exec() {
  const value = readline.questionFloat("Digite o valor a ser convertido: \n");
  const baseUnit = readline.keyInSelect(units, "Digite a unidade base. Ex: km \n");
  const convertUnit = readline.keyInSelect(units, "Digite a unidade a ser convertida. Ex: m \n");

  const unitChoice = units[baseUnit];
  const convertChoice = units[convertUnit];
  const result = convert(value, baseUnit, convertUnit);
  console.log(`O valor de ${value}${unitChoice} é igual a ${result}${convertChoice}`);
  
}

exec();
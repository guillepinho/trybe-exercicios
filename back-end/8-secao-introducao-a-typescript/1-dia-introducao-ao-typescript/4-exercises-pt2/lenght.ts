type Table = { km: number, hm: number, dam: number, m: number, dm: number, cm: number, mm: number};

const table: Table = {
  km: 1000,
  hm: 100,
  dam: 10,
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001, 
};

const listOfMeasures = Object.keys(table);

function convert(measure: number, baseUnit: string, convertUnit: string): number {
  const tableAndBases: [string, number][] = Object.entries(table);

  const buIndexOf: number = listOfMeasures.indexOf(baseUnit);
  const cuIndexOf: number = listOfMeasures.indexOf(convertUnit);
  const factor: number = tableAndBases[buIndexOf][1] / tableAndBases[cuIndexOf][1];
  return measure * factor;
};

console.log(convert(100, 'm', 'km'));
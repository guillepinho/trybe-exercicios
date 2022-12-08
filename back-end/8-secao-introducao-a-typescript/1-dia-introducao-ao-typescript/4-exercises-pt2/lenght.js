var table = {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001
};
var listOfMeasures = Object.keys(table);
function convert(measure, baseUnit, convertUnit) {
    var tableAndBases = Object.entries(table);
    var buIndexOf = listOfMeasures.indexOf(baseUnit);
    var cuIndexOf = listOfMeasures.indexOf(convertUnit);
    var factor = tableAndBases[buIndexOf][1] / tableAndBases[cuIndexOf][1];
    return measure * factor;
}
;
console.log(convert(100, 'm', 'km'));

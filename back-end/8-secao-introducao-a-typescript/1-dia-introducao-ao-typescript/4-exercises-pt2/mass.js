var readline = require('readline-sync');
var massTable = {
    kg: 1000,
    hg: 100,
    dag: 10,
    g: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001
};
var units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
var unitsValue = [1000, 100, 10, 1, 0.1, 0.01, 0.001];
function convert(measure, baseUnit, convertUnit) {
    var base = unitsValue[baseUnit];
    var to = unitsValue[convertUnit];
    var exponent = base / to;
    return measure * exponent;
}
;
function exec() {
    var value = readline.questionFloat("Digite o valor a ser convertido: \n");
    var baseUnit = readline.keyInSelect(units, "Digite a unidade base. Ex: km \n");
    var convertUnit = readline.keyInSelect(units, "Digite a unidade a ser convertida. Ex: m \n");
    var unitChoice = units[baseUnit];
    var convertChoice = units[convertUnit];
    var result = convert(value, baseUnit, convertUnit);
    console.log("O valor de ".concat(value).concat(unitChoice, " \u00E9 igual a ").concat(result).concat(convertChoice));
}
exec();

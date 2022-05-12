const salary = 5000;
let ir;
let deduct;
let inss;
let baseIr;

// INSS Calculation

if (salary < 1556.94) {
    inss = salary * 0.08;
    baseIr = salary - inss;
}
else if (salary < 2594.92) {
    inss = salary * 0.09;
    baseIr = salary - inss;
}
else if (salary < 5189.82) {
    inss = salary * 0.11;
    baseIr = salary - inss;
}
else {
    inss = 570.88;
    baseIr = salary - inss;
}

// IR Calculation

if (baseIr <= 1903.98) {
    ir = baseIr * 0;
    deduct = 0;
}
else if (baseIr <= 2826.65) {
    ir = baseIr * 0.075;
    deduct = 142.8;
}
else if (baseIr <= 3751.05) {
    ir = baseIr * 0.15;
    deduct = 354.8;
}
else if (baseIr <= 4664.68) {
    ir = baseIr * 0.225;
    deduct = 636.13;
}
else {
    ir = baseIr * 0.275;
    deduct = 869.36;
}

console.log(`The worker's net profit is: ${salary - inss - ir + deduct}`);


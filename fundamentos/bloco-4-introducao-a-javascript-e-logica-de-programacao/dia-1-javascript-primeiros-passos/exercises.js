function biggerNum(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`The bigger number is ${a}.`);
    }
    else if (b >= a && b >= c) {
        console.log(`The bigger number is ${b}.`);
    }
    else if (c >= a && c >= b) {
        console.log(`The bigger number is ${c}.`);
    }
}

biggerNum(3, 5, 8);

function bigger(a, b) {
    if (a >= b) {
        console.log(`The bigger number is ${a}.`);
    }
    else {
        console.log(`The bigger number is ${b}.`);
    }
}

bigger(32, 8);

function chessPiece(piece) {
    const pieceToCheck = piece.toLowerCase();

    if (pieceToCheck == "bishop") {
        console.log("diagonals");
    }
    else if (pieceToCheck == "king") {
        console.log("one square horizontal, vertical or diagonal");
    }
    else if (pieceToCheck == "queen") {
        console.log("horizontal, vertical or diagonal");
    }
    else if (pieceToCheck == "rook") {
        console.log("horizontal or vertical");
    }
    else if (pieceToCheck == "knight") {
        console.log("two squares horizontal or vertical, and one more of the other type. L shaped move");
    }
    else if (pieceToCheck == "pawn") {
        console.log("one square vertical");
    }
    else {
        console.log("ops, there's no such piece");
    }
}

chessPiece('bishop');

function even(num1, num2, num3) {
    if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

even(10, 12, 13);

function odd(num1, num2, num3) {
    if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

odd(10, 12, 13);

function positive(num) {
    if (num > 0) {
        console.log("Positive.")
    }
    else if (num == 0) {
        console.log("Zero.")
    }
    else {
        console.log("Negative")
    }
}

positive(32);

function add(num1, num2) {
    console.log(num1 + num2);
    return;
}

function subtract(num1, num2) {
    console.log(num1 - num2);
    return;
}

function multiply(num1, num2) {
    console.log(num1 * num2);
    return;
}

function division(num1, num2) {
    console.log(num1 / num2);
    return;
}

function module(num1, num2) {
    console.log(num1 % num2);
    return;
}

add(32, 8);
subtract(32, 8);
multiply(32, 8);
division(32, 8);
module(32, 8);

function salary(salary) {
    let ir;
    let deduct;
    let inss;
    let baseIr;

    // INSS Calculation

    if (salary <= 1556.94) {
        inss = salary * 0.08;
        baseIr = salary - inss;
    }
    else if (salary <= 2594.92) {
        inss = salary * 0.09;
        baseIr = salary - inss;
    }
    else if (salary <= 5189.82) {
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
}

salary(5000);

function nota(nota) {
    let grade = String;

    if (nota >= 90) {
        grade = "A";
    }
    else if (nota >= 80) {
        grade = "B";
    }
    else if (nota >= 70) {
        grade = "C";
    }
    else if (nota >= 60) {
        grade = "D";
    }
    else if (nota >= 50) {
        grade = "E";
    }
    else {
        grade = "F";
    }

    console.log(grade);
}

nota(90);

function profit(buy, sell, tax) {
    if (buy <= 0 || sell <= 0 || tax <= 0) {
        console.log("error");
    }
    else {
        console.log(`The profit was ${sell - buy - (sell * tax)}`)
    }
}

profit(30, 50, 0.2);

function triangle(a, b, c) {
    let result;

    if (isNaN(a + b + c)) {
        result = "error"
    }
    else if (a < 0 || b < 0 || c < 0) {
        result = "error"
    }
    else if (a + b + c == 180) {
        result = true;
    }
    else if (a + b + c != 180) {
        result = false;
    }

    console.log(result);
}

triangle (32, 8, 140);
  
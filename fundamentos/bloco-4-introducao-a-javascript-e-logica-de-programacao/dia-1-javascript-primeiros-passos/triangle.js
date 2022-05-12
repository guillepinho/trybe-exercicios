const a = 32;
const b = 8;
const c = -140;

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
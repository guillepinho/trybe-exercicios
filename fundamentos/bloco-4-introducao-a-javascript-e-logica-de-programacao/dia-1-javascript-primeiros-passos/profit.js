const buy = 30;
const sell = 50;
const tax = 0.2;

if (buy <= 0 || sell <= 0 || tax <= 0) {
    console.log("error");
}
else {
    console.log(`The profit was ${sell - buy - (sell * tax)}`)
}
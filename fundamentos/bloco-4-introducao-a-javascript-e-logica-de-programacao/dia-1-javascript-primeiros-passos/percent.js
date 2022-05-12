const nota = 49;
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
let number1 = parseInt(prompt("Введите любое число:"));
let number2 = parseInt(prompt("Введите любое число:"));
sum();
Difference ();
multiplication();
division();

function sum() {
    alert(`"Результат сложения" ${number1+number2}`);
}
function Difference() {
    alert (`"Результат вычитания" ${number1-number2}`);
}
function multiplication() {
    alert(`"Результат умножения" ${number1 * number2} `);
}
function division() {
    alert(`"Результат деления" ${number1 / number2}`);
}

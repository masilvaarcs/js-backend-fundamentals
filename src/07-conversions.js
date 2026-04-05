// Conversão de tipos

// Conversão implícita
const numero = 456;
const numeroString = Number("456");

console.log("== (loose):", numero == numeroString);
console.log("=== (strict):", numero === numeroString);

// Conversão explícita
console.log("Number + Number:", numero + numeroString);
console.log("String():", String(numero));

// FASE 2 – cambio de strings a numero

function sumar(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function restar(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiplicar(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function dividir(a, b) {
    return parseFloat(a) / parseFloat(b);
}

// variables
let numero1 = "10";
let numero2 = "20";

console.log("La suma es de :", sumar(numero1, numero2)); 

console.log("La resta es de:", restar(numero1, numero2)); 

console.log("La multiplicacion es de:", multiplicar(numero1, numero2));

console.log("la division es de:", dividir(numero1, numero2));


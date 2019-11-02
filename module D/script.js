//Condições em js

let velocidade = 1;
let velocidadeMaxima = 190;
let velocidadeMinima = 60;
let parado = 0;

if (velocidade >= velocidadeMaxima ) {
    console.log("Multade de 1200$");
}else if (velocidade <= velocidadeMinima && velocidade >= 1) {
    console.log("velocidade permitida");
}else if (velocidade === parado) {
    console.log("seu carro não esta em movimento");
}
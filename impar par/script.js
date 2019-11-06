function verificar() {
    const txtv = document.querySelector('input#numero');
    const resultado = document.querySelector('div#res');
    const valor = Number(txtv.value);
    const par = valor % 2;
    if (par == 0) {
        resultado.innerHTML = `<p>esse número é <strong>par</strong></p>`
    } else if (par !== 0 ){
        resultado.innerHTML = `<p>Esse número é <span>impar</span>`
    } 
} 

function verificarSeMenorMaior() {
    let conferir = document.getElementById('valor');
    let resultado = document.getElementById('result');
    let numero = Number(conferir.value);
    if (numero > 10 && numero < 100) {
        resultado.innerHTML = `<strong>${numero}</strong> esse número é maior que <strong>10</strong> e menor que <strong>100</strong>`
    } else {
        resultado.innerHTML = `<span>${numero}</span> esse número não confere`
    }
}

function nove() {
    let busca = document.getElementById('divisivel');
    let resultado = document.getElementById('result');
    let converter = Number(busca.value);
    let dividir = converter % 9;
    if (dividir == 0) {
        
    }
}





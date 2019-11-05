function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verificar os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let gênero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10) {
                document.body.style.background = '#000';
            } else if (idade > 10 && idade <= 29) {
                document.body.style.background = '#6969';
            } else if (idade > 29 && idade <= 55) {
                document.body.style.background = '#af02df'
            } else if (idade > 55 && idade <= 125) {
                document.body.style.background = '#efa999'
            }
        }  else if (fsex[1].checkd) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10) {
                document.body.style.background = '#af2';
            } else if (idade > 10 && idade <= 29) {
                document.body.style.background = '#dca000';
            } else if (idade > 29 && idade <=55) {
                document.body.style.background = '#cdf222';
            } else if (idade > 55 && idade <= 125) {
                document.body.style.background = '#f2f';
            }   
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    }
}

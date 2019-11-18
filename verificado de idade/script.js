function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fimAno = document.getElementById('txtano');
    let res = document.querySelector('div#res');
    if (fimAno.value.length == 0 || Number(fimAno.value) > ano) {
        alert('[ERRO] Verificar os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fimAno.value);
        let gênero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10) {
                document.body.style.background = '#000';
                img.setAttribute('src', 'img/menino.jpg')
                gênero = 'uma criança';
            } else if (idade > 10 && idade <= 29) {
                document.body.style.background = '#6969';
                img.setAttribute('src', 'img/garoto.jpg');
                gênero = 'um jovem';
            } else if (idade > 29 && idade <= 55) {
                document.body.style.background = '#af02df';
                img.setAttribute('src', 'img/adulto.jpg');
                gênero = 'um rapaz';
            } else if (idade > 55 && idade <= 125) {
                document.body.style.background = '#efa999';
                img.setAttribute('src', 'img/vô.jpg');
                gênero = 'um idoso';
            } else if (idade < 126) {

            }
        }  else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                document.body.style.background = '#af2';
                img.setAttribute('src', 'img/menina.jpg');
                gênero = 'criança';
            } else if (idade > 10 && idade <= 29) {
                document.body.style.background = '#dca000';
                img.setAttribute('src', 'img/garota.jpg');
                gênero = 'uma jovem';
            } else if (idade > 29 && idade <=55) {
                document.body.style.background = '#cdf222';
                img.setAttribute('src', 'img/adulta.jpg');
                gênero = 'uma moça';
            } else if (idade > 55 && idade <= 125) {
                document.body.style.background = '#f2f';
                img.setAttribute('src', 'img/vó.jpg');
                gênero = 'uma idosa';
            }   
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(img)
    }
}

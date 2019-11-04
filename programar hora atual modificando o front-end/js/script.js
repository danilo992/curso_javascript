function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let descricaoAtual = document.getElementById('atual')
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora <= 12) {
        //bom dia
        img.src = 'img/dia.jpg';
        document.body.style.background = '#fff000';
        document.body.style.color = '#000';
        descricaoAtual.innerHTML = '<h1>BOM DIA :)</h1>';
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde.jpg';
        document.body.style.background = '#acffec';
        descricaoAtual.innerHTML = '<h1>BOA TARDE ;)</h1>'
    } else if (hora >= 18 && hora <= 24) {
        img.src ='img/noite.jpg';
        document.body.style.background = '#696969';
        descricaoAtual.innerHTML = '<h1>BOA NOITE zzz</h1>'
    }
}
document.addEventListener('DOMContentLoaded, functio()'{
    let tamanhoAtualFonte = 1;

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    
    aumentaFonteBotao.addEventListener('click', functio(){
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})
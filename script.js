document.addEventListener('DOMContentLoaded', function(){
    let tamanhoAtualFonte = 1;
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminui-fonte');
    
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte +=0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -=0.2;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
}) 
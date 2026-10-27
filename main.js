var mensagem = document.getElementById('msg');
var valorLabel = document.getElementById('graus');
var slider = document.getElementById("myRange");
const totalTemp = ['mtFrio','frio','calor','padrao'];

slider.addEventListener('input', function(){
valorLabel.textContent = slider.value + " °C";

    let valorAtual = parseFloat(slider.value);
    valorIdeal = calcularTemperatura(valorAtual)

    if (valorAtual < 10){
        trocarTemp('mtFrio', 'Muito Frio');
    }
    else if (valorAtual < 22){
        trocarTemp('frio', 'Frio');//koko
    }
    else if (valorAtual <= 26){
        trocarTemp('padrao', 'Morna');
    }
    else if (valorAtual > 26){
        trocarTemp('calor', 'Calor');
    }
   
});

function trocarTemp(temperatura, desc){
    mensagem.classList.remove(...totalTemp);
    mensagem.classList.add(temperatura)


    mensagem.innerHTML = `Temperatura: ${desc}<br>
                        Recomendado deixar o ar-condicionado em <br>
                        <b>${valorIdeal}</b> ºC`;
}

function calcularTemperatura(tempExterna) {
    //20 ~ 22 temperatura ideal 
  let temperaturaIdeal = 22 + (tempExterna - 28) * 0.3;
  return Math.round(Math.max(18, Math.min(26, temperaturaIdeal)));
}




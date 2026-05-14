var frio = 13;
var morno = 22;
var quente = 28;
var temp = document.getElementById('temp');
var mensagem = document.getElementById('msg');
var valorLabel = document.getElementById('graus');
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var valorOposto;


slider.addEventListener('click', function(){
valorLabel.textContent = slider.value + " °C";

    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    var valorAtual = parseFloat(slider.value);
    valorOposto = max + min - slider.value;

    if (slider.value < 17){
        if (slider.value <= 5){
            var dif = (parseFloat(slider.value) + 30);
             mensagem.textContent = `Temperatura Fria: Recomendado deixar o ar-condicionado em ${dif} ºC`;
        }
         if (slider.value > 5){
            var dif = (parseFloat(slider.value) + 10);
             mensagem.textContent = `Temperatura Fria: Recomendado deixar o ar-condicionado em ${dif} ºC`;
        }
        
        var dif = (parseFloat(slider.value) + 30);
       

        mensagem.textContent = `Temperatura Fria: Recomendado deixar o ar-condicionado em ${dif} ºC`;
    }

    if (slider.value > 17 && slider.value <= 22){
        mensagem.textContent = `Temperatura Morna: Recomendado deixar o ar-condicionado Desligado`;
   }  if (slider.value > 22) {
        var dif = (slider.value) - ((slider.value - 22)*2);

        mensagem.textContent = `Temperatura Quente: Recomendado deixar o ar-condicionado em ${dif} ºC`;
   }
   

   
});





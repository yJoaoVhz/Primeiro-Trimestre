const botoes  = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abas-conteudo");
const tempo = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date(2024, 7,29);
const tempoObjetivo2 = new Date(2024, 8,29);
const tempoObjetivo3 = new Date(2024, 9,29);
const tempoObjetivo4 = new Date(2024, 10,29);
let segundos;
let minutos;
let horas;
let dias;
const agora = new Date();
segundos = (tempoObjetivo1 - agora)/1000;
minutos = segundos /60;
horas = minutos /60;
dias = horas/24;
segundos = Math.floor(segundos);
minutos = Math.floor(minutos);
horas = Math.floor(horas);
dias = Math.floor(dias);
tempo[0].textContent = `faltam ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`
console.log(tempo);
console.log(botoes);
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function(){
        for (let j = 0;j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
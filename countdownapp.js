const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezemro',
];

const diasSemana = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
];

const info = document.querySelector('.info');
const count = document.querySelector('.count');
const itens = document.querySelectorAll('.count h4');

let dataFutura = new Date(2022, 12, 31, 30, 0)

const ano = dataFutura.getFullYear();
const horas = dataFutura.getHours();
const minutos = dataFutura.getMinutes();

let mes = dataFutura.getMonth();
mes = meses[mes];
const data = dataFutura.getDate();

const diaSemana = diasSemana [dataFutura.getDay()];

info.textContent = `A contagem termina em ${diaSemana}, ${data} ${mes} ${ano} ${horas}:${minutos}`;

const tempoFuturo = dataFutura.getTime();

function getRemainingTime() {
    const hoje = new Date().getTime(); 
    const t = dataFutura - hoje;
    console.log(t);
    const umDia = 24 * 60 * 60 * 1000;
    const umaHora = 60 * 60 * 1000;
    const umMin = 60 * 1000;
    let dias = t/umDia;
    dias = Math.floor(dias);
    let horas = t/umaHora;
}

getRemainingTime();
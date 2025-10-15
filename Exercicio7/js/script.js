let data = prompt("Digite uma data no formato dd/mm/aaaa:");

let partes = data.split("/");

let dia = partes[0];
let mes = partes[1];
let ano = partes[2];

let nomesMeses = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

let nomeMes = nomesMeses[parseInt(mes) - 1];

alert(`${dia} de ${nomeMes} de ${ano}`);


const btn = document.querySelector("#btnCalcular");
const tabela = document.querySelector("#tabela tbody");

btn.addEventListener('click', () => {
    let numero1 = Number(document.querySelector("#numero1").value);
    let numero2 = Number(document.querySelector("#numero2").value);

    if(!numero1 || !numero2 || !numero2 === 0){
        alert("Valores invalidos!");
        return;
    }
    
    let soma = numero1 + numero2;
    let produto = numero1 * numero2;
    let divisao = numero1 / numero2;
    let restoDivisao = numero1 % numero2;

    tabela.innerHTML = " ";
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
    <td>Soma:<td>
    <td>${soma}</td>
    `;
    tabela.appendChild(novaLinha);

    const linhaMultiplicacao = document.createElement('tr');
    linhaMultiplicacao.innerHTML = `
    <td>Multiplicação:<td>
    <td>${produto}</td>
    `;
    tabela.appendChild(linhaMultiplicacao);

    const linhaDivisao = document.createElement('tr');
    linhaDivisao.innerHTML = `
    <td>Divisâo:<td>
    <td>${divisao}</td>
    `;
    tabela.appendChild(linhaDivisao);

    const linhaRestoDivisao = document.createElement('tr');
    linhaRestoDivisao.innerHTML = `
    <td>Resto da Divisão:<td>
    <td>${restoDivisao}</td>
    `;
    tabela.appendChild(linhaRestoDivisao);

});

    






let MatrizPessoas = [
    [1.85, M],
    [1.75, F],
    [1.54, F],
    [1.69, M],
    [1.93, M],
    [1.42, M],
    [1.64, F],
    [1.23, F],
    [1.75, M],
    [1.52, F],
    [1.82, F],
    [1.77, F],
    [1.56, M],
    [1.62, M],
    [1.81, M]
]

for(let i=0; i<15; i++){
    let maisAlta = 0, maisBaixa = 0, contadorM = 0, contadorF = 0;
    if(maisAlta < MatrizPessoas[i][0]){
        maisAlta = MatrizPessoas[i][0];
    }
    if(maisBaixa > MatrizPessoas[i][0]){
        maisBaixa = MatrizPessoas[i][0];
    }
    if(MatrizPessoas[i][1] == 'M'){
        contadorM++;
    }else if(MatrizPessoas[i][1] == 'F'){
        somaAlturaF =+ MatrizPessoas[i][0];
        contadorF++;
    }
}

console.log(`A pessoa mais alta tem: ${maisAlta} metros.`);
console.log(`A pessoa mais baixa tem ${maisBaixa} metros.`);
console.log(`A média de altura das mulheres é ${somaAlturaF/contadorF} metros.`);
console.log(`A quantidade de homens é ${contadorM}.`);
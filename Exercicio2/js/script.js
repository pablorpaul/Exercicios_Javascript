let contBom = 0;
let contOtimo = 0;
let contRegular = 0;
let totalIdadeOtimo = 0;


for(let i=0; i<15; i++){
    let idade = Number(prompt(`Espectador ${i+1} - Informe sua idade:`));

    let opiniao = Number(prompt(`Espectador ${i+1} - Qual a sua opinião sobre o filme? Ótimo = 3, Bom = 2, Regular = 1 `));

    while (opiniao != 1 && opiniao != 2 && opiniao != 3 ) {
        opiniao = prompt(`Opinião inválida. Por favor, digite: 3 para ótimo, 2 para bom ou 1 para regular para o espectador ${i + 1}:`);
    }

    if(opiniao === 2){
        contBom++;
    }

    if(opiniao === 1){
        contRegular++;
    }

    if(opiniao === 3){
        totalIdadeOtimo += idade;
        contOtimo++;
    }
}

let mediaIdadeOtimo = totalIdadeOtimo / contOtimo;
let percBom = (contBom / 15) * 100;

console.log(`Média das idades das pessoas que responderam ótimo: ${mediaIdadeOtimo}`);
console.log(`Quantidade de pessoas que responderam regular: ${contRegular}`);
console.log(`Porcentagem de pessoas que responderam bom: ${percBom}`);
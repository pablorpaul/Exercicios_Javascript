let contHomem = 0;
let contMulher = 0;
let somaIdadeHomens = 0;
let somaPesoMulheres = 0;



for(let i=0; i<3; i++){
    let idade = Number(prompt(`Idade da ${i+1}ª pessoa:`));

    let peso = Number(prompt(`Peso da ${i+1}ª pessoa`));

    let sexo = prompt(`Sexo da ${i+1}ª pessoa`);

    if(sexo === 'm' || sexo === 'M'){
        contHomem++;
        somaIdadeHomens += idade;
    }

    if(sexo === 'f' || sexo === 'F'){
        contMulher++;
        somaPesoMulheres += peso;
    }
}

let mediaIdadeHomens = somaIdadeHomens / contHomem;
let mediaPesoMulheres = somaPesoMulheres / contMulher;


console.log(`Quantidade de homens: ${contHomem}`);
console.log(`Quantidade de mulheres: ${contMulher}`);
console.log(`Media de peso das mulheres: ${mediaPesoMulheres}`);
console.log(`Media de idade dos homens: ${mediaIdadeHomens}`);
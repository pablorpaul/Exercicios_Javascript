let somaPares = 0;
let primo;
let somaPrimos = 0;

function ehPrimo(num){
    const limite = Math.sqrt(num);
    for (let i = 3; i <= limite; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for(let i=0; i<10; i++){
    let numero = Number(prompt(`Numero ${i+1}`));

    while (isNaN(numero)){
        numero = Number(prompt(`Numero Invalido. Digite Novamente`));
    }
    

    if (numero%2 === 0){
        somaPares += numero;
    }
    if (numero <= 1){
        primo = false;
    } else if(numero === 2){
        primo = true;
    } else if(numero%2 === 0){
        primo = false;
    } else{
        primo = ehPrimo(numero);
    }

    if(primo){
        somaPrimos += numero;
        console.log(numero)
    }
}



console.log(`Soma dos numeros pares: ${somaPares}`);
console.log(`Soma dos numeros primos: ${somaPrimos}`);
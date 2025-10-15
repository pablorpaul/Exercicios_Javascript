


let salario = Number(prompt("Digite o seu sálario: (0000.00)"));

if(salario <= 280){
    salario = salario * 1.20;
}else if(salario <= 700){
    salario = salario * 1.15;
}else if(salario <= 1500){
    salario = salario * 1.10;
}else{
    salario = salario * 1.05;
}

console.log(`Seu salário após reajuste será: ${salario}`)
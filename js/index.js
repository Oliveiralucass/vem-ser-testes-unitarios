// Homework testes unitários
export const ex2 = (num1, num2) => {
    let numero1 = num1;
    let numero2 = num2;
    let resultado = numero1 + numero2;
    return resultado;
};
export const ex6 = (num) => {
    let ano = Number(num);
    if (ano % 400 === 0
        || ano % 4 === 0 && ano % 100 != 0) {
        return `é um ano bissexto`;
    }
    else {
        return `não é um ano bissexto`;
    }
};
export const ex7 = () => {
    let counter = 0;
    console.log("ANA BANANA");
    counter++;
    console.log("ANA BANANA");
    counter++;
    console.log("ANA BANANA");
    counter++;
    console.log("ANA BANANA");
    counter++;
    console.log("ANA BANANA");
    counter++;
    console.log("ANA BANANA");
    counter++;
    console.log("ANA BANANA");
    counter++;
    console.log("ANA BANANA");
    counter++;
    console.log("ANA BANANA");
    counter++;
    return (counter);
};
export const ex9 = (num1, num2) => {
    let idade1 = num1;
    let idade2 = num2;
    let idadeDif = (idade1 - idade2);
    let idadeDifOperador = idadeDif < 0 ? (idadeDif * -1) : idadeDif;
    return (idadeDifOperador);
};
export const ex10 = (ano) => {
    let anoAtual = ano;
    let anoDiferenca = Number(anoAtual) - 1500;
    let geraçõesPassadas = Math.floor(anoDiferenca / 28);
    return (geraçõesPassadas);
};

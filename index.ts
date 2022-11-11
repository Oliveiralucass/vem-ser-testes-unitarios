
// Homework testes unitários

export const ex2 = (num1: number, num2: number) => {
    let numero1 = num1
    let numero2 = num2

    let resultado = numero1 + numero2

    return resultado
}

export const ex6 = (num: number) => {
    let ano: number = Number(num);

    
    if(ano % 400 === 0 
    || ano % 4 === 0 && ano % 100 != 0) {
        return `é um ano bissexto`
    } else{
        return `não é um ano bissexto`
    }
};

export const ex7 = () => {
    let counter = 0

    console.log("ANA BANANA")
    counter++

    console.log("ANA BANANA")
    counter++

    console.log("ANA BANANA")
    counter++

    console.log("ANA BANANA")
    counter++

    console.log("ANA BANANA")
    counter++

    console.log("ANA BANANA")
    counter++

    console.log("ANA BANANA")
    counter++

    console.log("ANA BANANA")
    counter++

    console.log("ANA BANANA")
    counter++

    return (counter)
}

export const ex9 = (num1:number, num2: number) => {

    let idade1: number = num1;
    let idade2: number = num2;
    let idadeDif: number = (idade1 - idade2);
    let idadeDifOperador: number = idadeDif < 0 ? (idadeDif * -1) : idadeDif

    return (idadeDifOperador)
}


export const ex10 = (ano: string) => {

    let anoAtual: string | null = ano
    let anoDiferenca: number = Number(anoAtual) - 1500;
    
    let geraçõesPassadas = Math.floor(anoDiferenca / 28)

    return(geraçõesPassadas)
    
}
type Transformador = (str: string) => string

const paraMaiusculo: Transformador = (str:string) => {
    return str.toUpperCase()
}

const paraMinusculo: Transformador = (str:string) => {
    return str.toLowerCase()
}

const removerEspaços: Transformador = (str:string) => {
    const arr = str.split(" ")
    return arr.join("")
}

function aplicarTransformacoes(str: string, arr: Transformador[]): string {
    arr.forEach(func => {
        str = func(str)
    })

    return str
}



console.log(paraMaiusculo("jhean"))
console.log(paraMinusculo("JHEANNN"))
console.log(removerEspaços("Jhean Monteiro da Silva"))

const teste1 = aplicarTransformacoes("Jhean Monteiro da Silva", [removerEspaços, paraMinusculo])

const teste2 = aplicarTransformacoes("Jhean Monteiro da Silva", [removerEspaços, paraMaiusculo])

const teste3 = aplicarTransformacoes("Jhean Monteiro da Silva", [removerEspaços])

const teste4 = aplicarTransformacoes("Jhean Monteiro da Silva", [paraMinusculo])

console.log("sem espaços e para minusculo:", teste1)
console.log("sem espaços e para maiusculo:", teste2)
console.log("sem espaços", teste3)
console.log("para minusculo:", teste4)





// teste

function gerarStringAleatoria(tamanho:number) {
    const caracteres = 'ABC DEFGHIJKLM NOPQRSTUV WXYZabcdefgh ijklmnopqrstu vwxyz01234 56789';
    let resultado = '';
    
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres.charAt(indiceAleatorio);
    }
    
    return resultado;
}

let I = 1;

while (I < 100000) {
    const funcA = []
    const al = gerarStringAleatoria(I);

    const fizz = (I % 3 === 0)
    const buzz = (I % 5 === 0)
    const fizzBuzz = ((fizz === true) && (buzz === true))


    if (fizzBuzz === true) {
        funcA.push(removerEspaços);
    } else if (fizz === true) {
        funcA.push(paraMaiusculo);
    } else if (buzz === true) {
        funcA.push(paraMinusculo);
    } else {
        funcA.push(paraMaiusculo, removerEspaços);
    }

    console.log(aplicarTransformacoes(al, funcA))

    I++;
}
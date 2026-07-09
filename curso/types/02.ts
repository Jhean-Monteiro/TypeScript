type CoresObj = typeof coresObj

type Chaves = keyof CoresObj
/*{
    vermelho: string
    verde: string
    azul: string
    amarelo: string
}*/

const coresObj = {
    vermelho: "red",
    verde: 'green',
    azul: 'blue',
    amarelo: 'yellow',
    roxo: 'purple'
}

function traduzirCor(cor: Chaves, cores: typeof coresObj) {
    return cores[cor]
}

console.log(traduzirCor("vermelho", coresObj))
console.log(traduzirCor("verde", coresObj))
console.log(traduzirCor("amarelo", coresObj))
console.log(traduzirCor("azul", coresObj))
const objeto: Record<string, string> = {
    q: "primeiro",
    w: "segundo",
    e: "terceiro",
    r: "quarto",
    t: "quinto"
}
let u: string = "u"
objeto[u] = "sexto"
for (let chave in objeto) {
    console.log(chave, objeto[chave])
}

const {q,w,e,r,t} = objeto


let arr = new Array(1,2,3,4,5,6,7,-1,0,8,5,4,3,9)

let arr2 = arr.reduce((contador, atual) => {
    if (atual < contador.menor) {
        contador.menor = atual
    } 

    if (atual >= contador.maior) {
        contador.maior = atual
    }
    return contador
}, {menor: 0, maior: 0})

console.log(arr2)


const [nome1, nome2, nome3] = ["Marty", "Elyel", "Sion"]

console.log(nome1,nome2,nome3)


const objTeste = {
    descartavel: "descartavel",
    um: "1",
    dois: "2",
    tres: "3"
}

type Teste = typeof objTeste

const {descartavel, ...resto} = objTeste
console.log(resto)


function teste({descartavel,um,dois,tres}: Teste) {
    console.log(descartavel,um,dois,tres)
}

teste({descartavel, um: "teste", dois: "teste", tres: "kkkk"})
teste({descartavel, ...resto})
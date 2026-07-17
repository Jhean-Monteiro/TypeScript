const jhean = {
    nome: "Jhean",
    sobrenome: "Monteiro",
    idade: 21
}

type Pessoa = typeof jhean


function atualizaPessoa(pessoa: Pessoa, campo: Partial<Pessoa>) {
    return {...pessoa, ...campo}
}

console.log(atualizaPessoa(jhean, {sobrenome: "Silva", idade: 400}))



const numeros = [1,2,3,4,5,6,7,8,9,10]

const paresDobrados = numeros.filter(n => n % 2 === 0).map(n => n*2)
const imparesDobrados = numeros.filter(n => n % 2 !== 0).map(n => n*2)



console.log(paresDobrados)
console.log(imparesDobrados)

const arr = new Array<number>(1,2,3,4,5)
console.log(arr.reduce((n, c) => {return c + n}, 1))
console.log(arr)

type Veiculo = { marca: string; ano: number }

type Car = {
    brand: Veiculo["marca"]  // string
    year:  Veiculo["ano"]   // number
    name:  string
}


class Humano {
    constructor(protected _braco: Braco, protected _perna: Perna) {}

    get braco() {
        return this._braco
    }
    get perna() {
        return this._perna
    }
}

class Braco {
    acenar() {
        console.log("'Está acenando'")
    }
}
class BracoRobotico extends Braco {
    acenar() {
        console.log("'Acenando com um braço robotico'")
    }
}

class Perna {
    chutar() {
        console.log("'Está chutando'")
    }
}

const humano = new Humano(new BracoRobotico, new Perna)

humano.braco.acenar()
humano.perna.chutar()

export{}
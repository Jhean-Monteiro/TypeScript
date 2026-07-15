type ObterChaveFn = <O, K extends keyof O>(
  objeto: O, chave: K
) => O[K]

const objetChave:ObterChaveFn = (objeto, chave) => {
    return objeto[chave]
}

type Animal = {
    idade: number,
    vacinas: string[]
}

const animal:Animal = {
    idade: 20,
    vacinas: ["1", "2"]
} 


const vacinas = objetChave(animal, "vacinas")

const idade = objetChave(animal, "idade")

console.log(vacinas, idade)



type Valor = string | number 

function retornaValor(valor:Valor):Valor {
    return valor
}

function isString(valor: unknown): valor is string {
    return typeof valor === "string"
}

function isNumber(valor: unknown): valor is number {
    return (typeof valor === "number")
}

const valor = retornaValor(2)
const valor2 = retornaValor("kkkkkk")

function a(valor: Valor) {

    if (isNumber(valor)) {
        console.log(valor+6)   
    } else {
        console.log(valor.split(""))
    }

}
a(valor)
a(valor2)




function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign({}, obj1, obj2)
}

const obj1 = { chave1: "valor1" }
const obj2 = { chave2: "valor2" }

const uniao = unirObjetos(obj1, obj2)
// tipo: { chave1: string } & { chave2: string }
uniao.chave1 // ✅ string
uniao.chave2 // ✅ string

console.log(unirObjetos({chave: "kkkk"}, {chavinha: "sou a chave 2"}))





function soma(...args: any[]): number {
  // Se o primeiro argumento for um array, desmembra ele
  const lista = args.length === 1 && Array.isArray(args[0]) ? args[0] : args;

  return lista.reduce((sum, value) => {
    if (typeof value === 'number' && !isNaN(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
}

console.log(soma([1, 2, 3, true, 4]))
soma("1", "2", "3") // → 0 (nenhum é number)
console.log(soma(1, 2))

console.log("JheanMonteiro".split("M")[0])
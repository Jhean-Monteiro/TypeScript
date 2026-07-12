// Decorator factories

function inverteNomeECor(param1: string, param2: string) {
    // Closure
    return function <T extends new (...args: any[]) => any>(target: T): T {

        console.log("'Sou o decorador e recebi'", target)

        return class extends target {

            cor: string
            name: string
            constructor(...args: any[]) {
                super(...args)
                this.cor = this.inverte(args[1])
                this.name = this.inverte("Jubileu")

            }

            inverte(str: string) {
                return str.split("").reverse().join("") + " " + param1 + "  " + param2
            }
        }
    }
}




@inverteNomeECor("valor1", 'valor2')
class Animal {
    constructor(public name: string, public cor: string) {
        console.log("'sou a classe'")
    }
}




const animal = new Animal("sla", "preto")
console.log(animal)

export{}
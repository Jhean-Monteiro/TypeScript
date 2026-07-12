function inverteNomeECor<T extends new (...args: any[]) => any>(target: T) {

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
            return str.split("").reverse().join("")
        }
    }
}


@inverteNomeECor
class Animal {
    constructor(public name: string, public cor: string) {
        console.log("'sou a classe'")
    }
}




// const animal = new Animal("sla", "preto")
// console.log(animal)

export{}
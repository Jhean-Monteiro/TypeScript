// Decorators


// classe:

@decorator
class Animal {
    constructor(public name: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {

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


const animal = new Animal("sla", "preto")
console.log(animal)
class Circulo {
    #raio:number;

    constructor(raio: number) {
        this.#raio = raio;
    }

    get raio() {
        return this.#raio
    }

    calcularArea() {
        console.log(Math.PI * (this.raio * this.raio))
    }

}

class Retangulo {
    #largura
    #altura

    constructor(largura: number, altura: number) {
        this.#largura = largura
        this.#altura = altura
    }

    get largura() {return this.#largura}
    get altura() {return this.#altura}

    calcularArea() {
        let resultado = (this.largura*this.altura)
        console.log(resultado)
    }
}

const forma = new Circulo(3)
const forma2 = new Retangulo(4,6)

function calcular(forma: Retangulo | Circulo) {
    if (forma instanceof Circulo)  {
        return Math.PI * forma.raio * forma.raio
    }

    return forma.largura * forma.altura
}

const res = calcular(forma)
const res2 = calcular(forma2)
console.log(res, res2)

export{}
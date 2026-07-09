class Calculadora {
    constructor(public numero: number) {}

    add(a: number): this {
        this.numero += a
        return this
    }

    sub(a: number): this {
        this.numero -= a
        return this
    }

    div(a: number): this {
        this.numero /= a
        return this
    }

    mul(a: number): this {
        this.numero *= a
        return this
    }
}

class SubCalculadora extends Calculadora {
    pow(a: number): this {
        this.numero **= a
        return this
    }
}

const calculadora = new SubCalculadora(10);
calculadora.add(15).mul(2).mul(2).div(2).sub(25).pow(5);
console.log(calculadora);


// Builder - GoF
class RequestBuilder {
    private method: 'get' | 'post' | null = null
    private url: string | null = null

    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }

    setUrl(url: string): this {
        this.url = url
        return this
    }

    send(): void {
        console.log(`Enviando dados via ${this.method} para ${this.url}`)
    }

}

const request = new RequestBuilder()

request.setUrl("http://seila.com").setMethod('post').send()
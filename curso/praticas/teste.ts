type Dados = {
  "userId": number,
  "id": number,
  "title": string,
  "body": string
}


async function buscarPost(id:number) {
    try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (!resposta.ok) {
            console.log(resposta.status)
            return null
        }

        const dados = await resposta.json() as Dados
        return dados

    } catch (erro) {
        console.log(`erro: ${erro}`)
    }
    return null
}


(async () => {
    const seila = await buscarPost(2)
    console.log(seila)
})();


(async () => {
    const seila = await buscarPost(3)
    console.log(seila)
})();


(async () => {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const dados = await resposta.json() as Dados
    console.log(dados)
})();


async function buscarPosts(id: number) {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/")
        const teste = await resposta.json() as Dados[]
        return teste
    } catch (err) {
        return null
    }
}

(async () => {
    const ids = [1, 2, 3, 4, 5]
    const posts = await Promise.all(ids.map(id => buscarPost(id)))
    for (const post of posts) {
        console.log(post?.title)
    }
})();



// ============== // ============= // =========== // ============


interface Perso {
    nome: string
    nivel: number
    xp: number
    vida: number
    acao(alvo: Perso): string
}

class Player implements Perso {
    public xp: number = 0
    constructor(public nome: string, public nivel: number, public vida: number) {

    }
    acao(alvo: Perso) {
        alvo.vida -= (this.nivel*10) // (dano = nivel*10 por enquanto)
        if (alvo.vida <= 0) {
            return this.calcularXp(alvo)
        }
        return `${this.nome} está atacando ${alvo.nome}, que agora tem ${alvo.vida} de HP`
    }

    calcularXp(alvo: Perso) {
        this.xp += alvo.nivel * 10
        if (this.nivel*20 <= this.xp) {
            this.nivel++
            this.xp = 0
            return `${this.nome} ganhou ${alvo.nivel*10} de XP e subiu para o nivel ${this.nivel}`
        }
        return `${this.nome} ganhou ${alvo.nivel*10} de XP`
    }
}

const marte = new Player("Marte", 1, 100)
const sion = new Player("Sion", 10, 100)


console.log(marte.acao(sion))
console.log(marte.acao(sion))
console.log(marte.acao(sion))
console.log(marte.acao(sion))
console.log(marte.acao(sion))
console.log(marte.acao(sion))
console.log(marte.acao(sion))
console.log(marte.acao(sion))
console.log(marte.acao(sion))
console.log(marte.acao(sion))
console.log(marte.acao(sion))
type Personagem = {
    nome: string
    vida: number
    ataque: number
    atacar: (alvo:Personagem) => string
    estavivo: () => boolean
}

let arr:Personagem[] = []

for (let i = 0; i < 9999999; i++) {

    let pessoa: Personagem = {
        nome: `pessoa ${i}`,
        vida: (1+i)*2,
        ataque: 2*i,
        atacar: (alvo: Personagem) => `${pessoa.nome} atacou ${alvo.nome} causando ${pessoa.ataque} de dano!`,
        estavivo: () => true,
    }
    arr.push(pessoa)
    if (i > 1) {
        console.log(arr[arr.length-1].atacar(arr[arr.length-2]))
    }

}
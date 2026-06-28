type Animal = {
    nome: string
    idade: number
}

type Cachorro = Animal & {
    tipo: "cachorro"
    raca: string
    adestrado: boolean
}

type Passaro = Animal & {
    tipo: "passaro"
    especie: string
    envergadura: number
}

const descreverAnimal = (animal: Passaro | Cachorro): string => {
    if (animal.tipo === "passaro") {
        return `O animal é um ${animal.tipo} da espécie ${animal.especie}, e seu nome é ${animal.nome}`
    }

    return `O animal é um ${animal.tipo} da raça ${animal.raca}, e seu nome é ${animal.nome}`
}

const cachorro: Cachorro = {
    nome: "rex",
    tipo: "cachorro",
    idade: 7,
    raca: "vira-lata",
    adestrado: true
}

const passaro: Passaro = {
    nome: "louro",
    tipo: "passaro",
    idade: 3,
    especie: "Arara",
    envergadura: 15
}

console.log(descreverAnimal(passaro))
console.log(descreverAnimal(cachorro))


export{}
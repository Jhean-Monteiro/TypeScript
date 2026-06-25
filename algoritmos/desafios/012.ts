type Cachorro = {
    tipo: "cachorro", 
    nome: string, 
    raca: string
}

type Gato = {
    tipo: "gato", 
    nome: string, 
    vidas: number
}

type Passaro = {
    tipo: "passaro", 
    nome: string, 
    especie: string
}

// retorna true se oo animal for achorro
function isCachorro(animal: Cachorro | Gato | Passaro): animal is Cachorro {
    return animal.tipo === "cachorro"
}

function isGato(animal: Cachorro | Gato | Passaro): animal is Gato {
    return animal.tipo === "gato"
}

function descreverAnimal(animal: Cachorro | Gato | Passaro): string {
    if (isCachorro(animal)) {
        return `Cachorro: ${animal.nome}, raça ${animal.raca}`
    } else if (isGato(animal)) {
        return `Gato: ${animal.nome}, ${animal.vidas} vidas`
    }

    return `Passaro: ${animal.nome}, especie ${animal.especie}`;
}

const ricardo: Cachorro = { tipo: "cachorro", nome: "Rex", raca: "Labrador" }
const mimi: Gato = { tipo: "gato", nome: "Mimi", vidas: 9 }
const lud: Passaro = { tipo: "passaro", nome: "Ludcrous", especie: "Pardal" }

console.log(descreverAnimal(ricardo))
console.log(descreverAnimal(mimi))
console.log(descreverAnimal(lud))
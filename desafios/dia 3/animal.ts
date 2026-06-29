class Cachorro {
    tipo = "cachorro" as const
    latir() {
        return "AU"
    }
}

class Gato {
    tipo = "gato" as const
    miar() {
        return "MIAU"
    }
}

class Passaro {
    tipo = "passaro" as const
    piar() {
        return "PIU"
    }
}

type Animal = Cachorro | Gato | Passaro

function isCachorro(animal: Animal) {
    return animal.tipo === "cachorro"
}
function isGato(animal: Animal) {
    return animal.tipo === "gato"
}



function fazerBarulho(animal: Cachorro | Gato | Passaro): string {
    if (animal.tipo === "cachorro") {
        return animal.latir()
    } else if (animal.tipo === "gato") {
        return animal.miar()
    }
    return animal.piar()
    
}
for (let i = 0; i < 99999; i++) {
    console.log(fazerBarulho(new Cachorro()))
    console.log(fazerBarulho(new Gato()))
    console.log(fazerBarulho(new Passaro()))
}

export {}
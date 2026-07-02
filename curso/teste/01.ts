type Atk = (ent: Ent, level: number) => string

type Ent = {
    name: string
    level: number
    life: number
    atk: Atk
    status: (vida: number, dano: number) => string
}

type Goblin = Ent & {
    descricao: string
}

let goblin: Goblin = {
    name: "gobln da montanha",
    level: 10,
    life: 1000,
    atk: (ent, numero) => {
        return ent.status(ent.life, numero)
    },
    descricao: "Um Goblin",
    status: function (vida, dano) {
        if (vida <= 0) {
            return `O ${this.name} tomou ${dano} de dano. O ${this.name} foi derrotado`
        }
        return `O ${this.name} tomou ${dano} de dano`
    }
}

let Player: Ent = {
    name: "Aldebaran",
    level: 10,
    life: 1000,
    atk: (ent, numero) => {
        ent.life -= numero
        return ent.status!(ent.life, numero)
    },
    status: function (vida, dano){
        if (vida <= 0) {
            return `O ${this.name} tomou ${dano} de dano. O ${this.name} foi derrotado`
        }
        return `O ${this.name} tomou ${dano} de dano`
    }
}

let ataque = Player.atk(goblin, Player.level*100)
console.log(ataque)
console.log(goblin.life)


let ataque2 = goblin.atk(Player, goblin.level*99)
console.log(ataque2)
console.log(Player.life)
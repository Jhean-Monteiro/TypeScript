type Placar = Record<string, number>

function adicionarPontos(placar: Placar, jogador: string, pontos: number): Placar {
    return {
        ...placar,
        [jogador]: (placar[jogador] ?? 0) + pontos
    }
}

function ranking(placar: Placar): {
    jogador: string,
    pontos: number
}[] {
    return Object.entries(placar)
        .map(([jogador, pontos]) => ({jogador, pontos}))
        .sort((a,b) => b.pontos - a.pontos)
}

function lider(placar: Placar): string {
    return ranking(placar)[0].jogador
}

let placar: Placar = {}
placar = adicionarPontos(placar, "Jhean", 10)
placar = adicionarPontos(placar, "Huahua", 15)
placar = adicionarPontos(placar, "Jhean", 5)

console.log(ranking(placar))
console.log(lider(placar))
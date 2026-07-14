const pares = [2,4,6,8]
const impares = [1,3,5,7]
const numeros = [...pares, ...impares].sort((a, b) => {
    return a - b
})

console.log(numeros)



// ====== // =====
type Config = {
    tema: string
    idioma: string
    notificacoes: boolean
}

const configPadrao: Config = {
    tema: "claro",
    idioma: "pt-BR",
    notificacoes: true
}

const configUsuario = {...configPadrao, tema: "escuro"}

const configSilenciosa = {...configUsuario, notificacoes: false};

[configPadrao, configSilenciosa, configUsuario].forEach(a => console.log(a))




type Personagem = {
    nome: string
    nivel: number
    classe: string
}

const base: Personagem = { nome: "Elyel", nivel: 1, classe: "Mago" }

const evoluido:Personagem = {...base, nivel: 99}

function combinar(...args: Personagem[]): string {
    return args.map(p => p.nome).join(" vs ")
}



console.log(combinar(...(function a(): Personagem[]{
    const personagens: Personagem[] = []

    for (let i = 1; i< 99; i++) {
        personagens.push(
            {
                nome: `personagem ${i}`,
                nivel: i,
                classe: "sla"
            }
        )
    }


    return [...personagens];
})()));

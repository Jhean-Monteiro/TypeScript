type Config = {
    tema: "claro" | "escuro"
    idioma: string
    versao: number
}

function congelarConfig(config:Config): Readonly<Config> {
    return {
        ...config
    }
}

const config = congelarConfig({
    tema: "escuro",
    idioma: "pt-BR",
    versao: 2
})

//config.tema = "claro" // ❌ deve dar erro
console.log(config)
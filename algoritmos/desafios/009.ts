type Configuracao = {
    tema: "claro" | "escuro"
    idioma: string
    fonte: number
}

// Readonly: não pode reatribuir nenhum campo depois de criado
const configPadrao: Readonly<Configuracao> = {
    tema: "claro",
    idioma: "pt-BR",
    fonte: 14
}


// vai dar erro por causa do read only
// configPadrao.tema! = "escuro"



// Partial: todos os campos são opcionais
function aplicarConfig(config: Partial<Configuracao>): string {
    const partes: string[] = []

    if (config.tema !== undefined) partes.push(`tema: ${config.tema}`)

    if (config.idioma !== undefined) partes.push(`idioma: ${config.idioma}`)

    if (config.fonte !== undefined) partes.push(`fonte: ${config.fonte}`)

    return partes.join(", ")
}



console.log(aplicarConfig({ tema: "escuro" }))
console.log(aplicarConfig({ idioma: "pt-BR", fonte: 16 }))
console.log(aplicarConfig({}))
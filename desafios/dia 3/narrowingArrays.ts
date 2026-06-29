function processar(item: string | number | string[]): string {
    if (Array.isArray(item)) {
        return `Lista: [${item.join(", ")}]`
    }

    if (typeof item === "string") {
        return `texto: ${item}`
    }

    return `numero: ${item}`
}

console.log(processar(9))
console.log(processar(["jhean", "demiurgo", "baphomet"]))
console.log(processar("textinho"))
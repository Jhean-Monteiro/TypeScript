// array <T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1)
}

const result = multiplicaArgs(1, 2, 3, 4)
console.log(result)


// ================================================================

export function concatenaStrings(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor)
}

const concatenacao = concatenaStrings("Jhean", " ", "Monteiro")
console.log(concatenacao)


// ====================================================================

export function toUpperCase(...args: string[]): string[] {
    return args.map(valor => valor.toUpperCase());
}

const upper = toUpperCase("Jhean", " ", "Monteiro")
console.log(upper)

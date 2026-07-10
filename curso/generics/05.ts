// restrições em genericos

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K]

const objetChave: ObterChaveFn = (objeto, chave) => objeto[chave]

const animal = {
    cor: "Rosa" as "Rosa",
    vacinas: ["vacina 1", "vacina 2"],
    idade: 10
}

const vacinas = objetChave(animal, "vacinas")
const cor = objetChave(animal, "vacinas")

console.log(vacinas, cor, objetChave(animal, "idade"))
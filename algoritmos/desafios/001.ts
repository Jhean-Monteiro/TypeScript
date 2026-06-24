const apresentarPessoa = (nome: string, idade: number, ativo: boolean): string => {

    const vOuf = ativo === true ? "Ativo" : "Inativo"

    return `Pessoa: ${nome}, de idade: ${idade} anos, está ${vOuf}`
}

console.log(apresentarPessoa("Jhean Monteiro", 21, true))
console.log(apresentarPessoa("Zé da Manga", 21, false))
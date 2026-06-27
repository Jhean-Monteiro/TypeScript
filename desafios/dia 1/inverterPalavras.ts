function inverterPalavras(str: string): string {
   let arr = str.split(/(\s)/);

    str = ""

    arr.forEach(l => {
        str = l + str
    })
    return str
}

console.log(inverterPalavras("jhean monteiro da silva"))
console.log(inverterPalavras("eu odeio typescript, mas infelizmente no mercado é mais cobrado que o javascript no uso com react"))
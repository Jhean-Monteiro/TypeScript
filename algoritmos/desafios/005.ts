type Resultado = | { ok: true,  valor: number } | { ok: false, mensagem: string }

const exibirResultado = (resultado:Resultado): string => {

    if (resultado.ok) {
        return `Sucesso! O valor é ${resultado.valor}`
    }
    
    return `Erro: ${resultado.mensagem}`
}

const resultado1:Resultado = {ok:true, valor: 12}

const resultado2:Resultado = {ok:false, mensagem: "TypeError"}

console.log(exibirResultado(resultado1))
console.log(exibirResultado(resultado2))
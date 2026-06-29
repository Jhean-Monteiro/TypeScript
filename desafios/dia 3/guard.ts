type Pagamento =
    | { metodo: "cartao", numero: string, CVV: string }
    | { metodo: "pix",    chave: string }
    | { metodo: "boleto", codigoBarras: string }

function processarPagamento(pagamento:Pagamento): unknown {
    if (pagamento.metodo === "cartao") {
        return `**** **** **** ${pagamento.numero}, CVV: ${pagamento.CVV}`
    }

    if (pagamento.metodo === "pix") {
        return `PIX: ${pagamento.chave}`
    }

    if (pagamento.metodo === "boleto") {
        return `Boleto: ${pagamento.codigoBarras}`
    }

    const _impossivel: never = pagamento
}


let i = 0
let j = 3

while (true) {
    if (i === j) {
        j = j+3
    }

    if (i + 3 === j) {
        let pagamento:Pagamento = {
            metodo: "cartao",
            numero: "1234",
            CVV: "123"
        }
        console.log(processarPagamento(pagamento))
        i++
    }

    if (i + 2 === j) {
        let pagamento2:Pagamento = {
            metodo: "pix",
            chave: "220.494.939-28"
        }
        console.log(processarPagamento(pagamento2))

        i++
    }

    if (i+1 === j) {
        let pagamento3:Pagamento = {
            metodo: "boleto",
            codigoBarras: "1253.6666.7542.6847"
        }
        console.log(processarPagamento(pagamento3))

        i++
    }

    if (i === 9999999) break
}

const pagamentos: Pagamento[] = [
    { metodo: "cartao", numero: "1234", CVV: "123" },
    { metodo: "pix", chave: "chave@email.com" },
    { metodo: "boleto", codigoBarras: "1234.5678" }
]

pagamentos.forEach(p => console.log(processarPagamento(p)))
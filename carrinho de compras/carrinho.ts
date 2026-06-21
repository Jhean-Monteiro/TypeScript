interface ItemCarrinho {
    nome: string;
    preco: number;
    quantidade: number;
}

const carrinho:ItemCarrinho[] = [] // inicia o carrinho vazio;

function adicionarItem(nomeProd: string, precoProd: number, qtd: number) {
    // busca se o produto já está no carrinho para não duplicar as linhas
    const itemExistente = carrinho.find(item => item.nome === nomeProd)

    if (itemExistente) { // se o produto já existir no carrinho
        itemExistente.quantidade += qtd; // apenas soma a nova quantidade à existente
        console.log(`[+] Aumentada a quantidade de ${nomeProd} para ${itemExistente.quantidade}`)
    } else {
        carrinho.push({
            nome: nomeProd,
            preco: precoProd,
            quantidade: qtd
        });
        console.log(`[+] ${qtd}x ${nomeProd} adicionado ao carrinho.`)
    }
}

// função para calcular o valor total do carrinho usando .reduce()
function calcularTotal(): number {
    const total = carrinho.reduce((ac, item) => {
        return ac + (item.preco * item.quantidade)
    }, 0) // esse '0' é o valor inicial do acumulador (igual fazer 'int totoal = 0' em C)

    return total;
}


// função para exibir o cupom fiscal no terminal
function exibirCarrinho(): void {
    console.log("\n====== SEU CARRINHO ======");
    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;

        console.log(`${item.quantidade}x ${item.nome} (R$ ${item.preco} cada) -> Subtotal: R$ ${subtotal}`)
    }) // fim do loop

    console.log("------------------------------");
    console.log(`TOTAL DA COMPRA: R$ ${calcularTotal()}`);
    console.log("==========================\n");
}


// TESTANDO O CARRINHO

adicionarItem("Teclado Mecânico", 250, 1);
adicionarItem("Mouse Gamer", 150, 1);
adicionarItem("Monitor 24'", 900, 2);
exibirCarrinho();

adicionarItem("Mouse Gamer", 150, 1);
exibirCarrinho();
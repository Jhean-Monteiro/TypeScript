interface Documento {
    id: number;
    nomeDoArquivo: string;
}

const filaDeImpressao: Documento[] = [];
let elementoId: number = 1;

// função: enviar um arquivo para imprimir;
function enviarParaImpressora(nome: string): void {
    const novoDoc: Documento = {
        id: elementoId,
        nomeDoArquivo: nome
    };

    // o .push() coloca sempre no final da fila
    filaDeImpressao.push(novoDoc);
    elementoId++;

    console.log(`'${nome}' entrou na fila de impressão. Posição: ${filaDeImpressao.length}`);
}

// função: A impressora processando a fila
function imprimirProximo(): void {
    if (filaDeImpressao.length === 0) {
        console.log(`A impressora está livre. não há documentos na fila.`);
        return;
    }

    // O .shift() remove o primeiro item do array (indice 0) e guarda na variável
    const docAtual = filaDeImpressao.shift();

    if (docAtual) {
        console.log(`Imprimindo agora: ${docAtual.nomeDoArquivo} (ID: ${docAtual.id})`);
        console.log(`Restam ${filaDeImpressao.length} documentos na fila\n`)
    }
}

// -------- TESTANDO A IMPRESSORA ----------

enviarParaImpressora("curriculo.pdf");
enviarParaImpressora("relatorio_financeiro.xlsx");
enviarParaImpressora("foto_gato.png");

console.log("\n--- INICIANDO IMPRESSÃO ---");

imprimirProximo() // imprime o currículo, que foi o primeiro a entrar
imprimirProximo() // imprime o relatório financeiro

enviarParaImpressora("boleto.pdf") // enviado pro finla da fila


imprimirProximo(); // Imprime a foto_gato.png
imprimirProximo(); // Imprime o boleto.pdf
imprimirProximo(); // Fila vazia
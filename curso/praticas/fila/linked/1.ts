// estrutura do nó

interface No {
    valor: number;
    proximo: No | null; // o último aponta para null
}

function criarFila() {
    // ponteiros de controle da fila
    let inicio: No | null = null; // Aponta para o primeiro da fila (quem vai sair)
    let fim: No | null = null; // Aponta para o último da fila (quem acabou de entrar)
    let tamanho = 0;

    return {
        enqueue(valor: number): void {
            const novoNo: No = {
                valor: valor,
                proximo: null
            };

            if (fim === null) {
                // se a fila estava vazia, o novo nó é o inicio e o fim ao mesmo tempo
                inicio = novoNo;
                fim = novoNo;
            } else {
                // se já tinha gente, o atual fim aponta para o novo nó
                fim.proximo = novoNo;

                // e agora o novo nó passa a ser oficialmente o fim da fila
                fim = novoNo;
            }
            tamanho++;
        },

        dequeue(): number | null {
            if (inicio === null) {
                return null; // fila vazia
            }

            // guarda o valor que está saindo
            const valorSaindo = inicio.valor;

            // o ponteiro do inicio avança para o próximo nó
            inicio = inicio.proximo;

            // se o inicio virou null, significa que a fila esvaziou, então o fim também é null
            if (inicio === null) {
                fim = null;
            }

            tamanho --;
            return valorSaindo;
        },

        getTamanho(): number {
            return tamanho;
        },

        exibir(): void {
            console.log("Fila:")
            let i = inicio; 
            while (i != null) {
                console.log(`[${i.valor}]`);
                i = i.proximo;
            }
        }
    }
}


// --- Testando a nossa Fila ---
const minhaFila = criarFila();

minhaFila.enqueue(10); // Fila: [10]
minhaFila.enqueue(20); // Fila: [10] -> [20]
minhaFila.enqueue(30); // Fila: [10] -> [20] -> [30]

console.log(minhaFila.dequeue()); // Sai o 10 (Primeiro a entrar)
console.log(minhaFila.dequeue()); // Sai o 20
console.log(minhaFila.getTamanho()); // Sobrou 1 elemento (o 30)

minhaFila.enqueue(40);
minhaFila.enqueue(50);
minhaFila.enqueue(60);
minhaFila.enqueue(70);
minhaFila.exibir()
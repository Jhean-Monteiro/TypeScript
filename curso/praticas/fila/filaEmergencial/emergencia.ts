interface Paciente {
    nome: string;
    nivelPrioridade: number; // 1 (vermelho), 2 (amarelo) ou 3 (verde)
}

const filaHospital: Paciente[] = [];


// função: recepcionista adicionando o paciente na fila correta

function triagem(nomePaciente: string, prioridade: number): void {
    const novoPaciente: Paciente = {
        nome: nomePaciente,
        nivelPrioridade: prioridade
    };

    // se a fila estiver totalmente vazia, não precisamos calcular nada
    if (filaHospital.length === 0) {
        filaHospital.push(novoPaciente);
         console.log(`${nomePaciente} entrou: A fila estava vazia.`)
         return;
    }

    // O .findIndex() vai varrer a fila da esquerda para a direita. 
    // ele vai parar no PRIMEIRO paciente que tiver uma prioridade menos grave
    // (ou seja, um número maior) do que o paciente acabou de chegar

    const indiceDeCorte = filaHospital.findIndex(pacienteNaFila =>
        pacienteNaFila.nivelPrioridade > prioridade
    );

    if (indiceDeCorte === -1 ) {
        // se o findIndex retornar -1, significa que ele não achou ninguém menos grave.
        // ou seja, o novo paciente é o caso mais leve e vai para o final da fila
        filaHospital.push(novoPaciente);
    } else {
        // se achou, usamos o .splice para cortar a fila e inserir o paciente ali.
        // como funciona o splice: splice(posição, quantos_deletar, item_para_inserir)
        filaHospital.splice(indiceDeCorte, 0, novoPaciente); 
    }

    console.log(`[+] Novo paciente: ${nomePaciente} (Prioridade ${prioridade}) inserido na fila`);
}

// função: Médico chamando o próximo
function atenderProximo(): void {
    console.log("\n--- PAINEL DE ATENDIMENTO ---");

    // O .shift semppre tira e retorna o primeiro da fila (o indice 0)
    const pacienteAtual = filaHospital.shift();

    if (pacienteAtual) {
        let cor: string = ""
        if (pacienteAtual.nivelPrioridade === 1) cor = "🔴 EMERGÊNCIA";
        if (pacienteAtual.nivelPrioridade === 2) cor = "🟡 URGÊNCIA";
        if (pacienteAtual.nivelPrioridade === 3) cor = "🟢 NORMAL";

        console.log(`Médico atendendo agora: ${pacienteAtual.nome} - ${cor}`);
    } else {
        console.log(`Fila vazia!`)
    }

    console.log("-----------------------------\n");
}


// função: mostrar como a fila está no momento
function exibirFila(): void {
    console.log(`Pacientes aguardando: ${filaHospital.length}`);

    filaHospital.forEach((p, index) => {
        console.log(` ${index + 1}º -> ${p.nome} (Prioridade ${p.nivelPrioridade})`)
    });

    console.log("")
}


// ========== TESTANDO O HOSPITAL ============

// Chegam 3 pacientes com dores leves (prioridade 3)
triagem("Zé da Manga", 3);
triagem("Maria", 3);
triagem("Carlos", 3);

exibirFila()


// chega um paciente com febre alta (prioridade 2)
triagem("Joe of Mango", 2);

exibirFila(); // Joe com prioridade maior (amarelo) é inserida na posição 0

triagem("Jhean", 1);

exibirFila(); // Jhean com prioridade maior (vermelho) é inserido na posição 0 (lugar de Joe, que é empurrado pra posição 1)

atenderProximo(); 
atenderProximo(); 
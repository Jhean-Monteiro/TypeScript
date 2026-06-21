// define o formato (o "molde") de como uma tarefa deve ser
interface Tarefa {
    id: number;
    texto: string;
    concluida: boolean;
}

// criando o array principal que vai guardar as tarefas 
const listaDeTarefas: Tarefa[] = []; // cria um array vazio e avisa o TS que ele só aceita objetos do tipo 'Tarefa'

let contadorId: number = 1; // cria um contador numérico para gerar IDs únicos, começando em 1


const adicionarTarefa = (textoDaTarefa: string): void => {
    const novaTarefa: Tarefa = {
        id: contadorId,
        texto: textoDaTarefa, // define a descrição como o texto que foi passado para a função
        concluida: false
    };

    listaDeTarefas.push(novaTarefa);
    contadorId++;

    console.log(`[+] Adicionado: ${textoDaTarefa}`);
}


// função para marcar tarefa como concluída usando ID
const concluirTarefa = (idBuscado: number): void => {
    // O METODO 'find' percorre o array e retorna o primeiro item que bater com a condição
    const tarefaEncontrada = listaDeTarefas.find(tarefa => tarefa.id === idBuscado);

    if (tarefaEncontrada) { // verifica se a tarefa realmente foi achada (se não for null ou undefined)
        tarefaEncontrada.concluida = true;
        console.log(`[V] Tarefa ${idBuscado} marcada como concluida!`)
    } else {
        console.log(`[X] Erro: Tarefa ${idBuscado} não encontrada`)
    }
}


// função para mostrar as tarefas
const mostrarTarefas = (): void => {
    console.log("\n------- Minha Lista de Tarefas -------")

    listaDeTarefas.forEach(tarefa => {
        const marca = tarefa.concluida ? "[X]" : "[ ]";
        console.log(`${marca} ${tarefa.id} - ${tarefa.texto}`)
    })
    console.log("------------------------------------\n")
}



adicionarTarefa("Aprender POO em typescript")

adicionarTarefa("Aprender objetos em typescript")

adicionarTarefa("Aprender ED em typescript")

mostrarTarefas()

concluirTarefa(2)
concluirTarefa(10) // não existe

mostrarTarefas()
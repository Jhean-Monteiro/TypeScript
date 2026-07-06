interface Salvavel {
    salvar(): string
}

class Nota implements Salvavel {
    titulo: string
    constructor(titulo: string, conteudo: string) {
        this.titulo = titulo
    }

    salvar() {
        return `Salvando nota: ${this.titulo}`
    }
}

class Tarefa implements Salvavel {
    descricao: string
    constructor(descricao: string, concluida: boolean) {
        this.descricao = descricao
    }

    salvar() {
        return `Salvando tarefa: ${this.descricao}`
    }
}

const tarefa = new Tarefa("estudar ingles", true)
const nota = new Nota("tenho que aprender TS", "texto")

const s: Salvavel[] = [tarefa, nota]

function salvarTodos(s: Salvavel[]) {
    s.forEach(m => console.log(m.salvar()))
}

salvarTodos(s)
type Tarefa = {
    descricao: string 
    prioridade: 1 | 2 | 3 
}

type Arr = {
    prioridade1: []
    prioridade2: []
    prioridade3: []
}

class FilaPrioridade {
   prioridade1: Tarefa[]
   prioridade2: Tarefa[]
   prioridade3: Tarefa[]

    constructor() {
        this.prioridade1 = []
        this.prioridade2 = []
        this.prioridade3 = []
    }

    adicionar(tarefa: Tarefa): void {
        if (tarefa.prioridade === 1) {
            this.prioridade1.push(tarefa)
            return
        } else if (tarefa.prioridade === 2) {
            this.prioridade2.push(tarefa)
            return
        }
        this.prioridade3.push(tarefa)
        return
    }

    proxima(): Tarefa | undefined  {
        if (!(this.prioridade1[0])) {
            if (!(this.prioridade2[0])) {
                return this.prioridade3.shift()
            }
            return this.prioridade2.shift()
        }
        return this.prioridade1.shift()
    }

    listar() {
        let novalista: Tarefa[] = [...this.prioridade1, ...this.prioridade2, ...this.prioridade3]

        for (let tarefa of novalista) {
            console.log(`[${tarefa.prioridade}] ${tarefa.descricao}`)
        }
    }
}

let fila1: Tarefa[] = []
let fila2: Tarefa[] = []
let fila3: Tarefa[] = []

const fila = new FilaPrioridade()
fila.adicionar({ descricao: "Estudar TypeScript", prioridade: 1 })
fila.adicionar({ descricao: "Fazer compras", prioridade: 3 })
fila.adicionar({ descricao: "Academia", prioridade: 2 })

fila.listar()

console.log(fila.proxima())
console.log(fila.proxima() )
fila.listar()
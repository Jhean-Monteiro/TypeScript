type AlunoType = {
    nome: string;
    notas: number[];
}

class Aluno implements AlunoType {
    nome: string;
    notas: number[];

    constructor(nome: string, notas: number[]) {
        this.nome = nome;
        this.notas = notas;
    }

    media(): number { 
        let total = this.notas.reduce((acc, nota) => acc + nota, 0);
        
        return  total / this.notas.length;
    }

    situacao(): "aprovado" | "recuperacao" | "reprovado" {
        if (this.media() > 7) {
            return "aprovado"
        } else if (this.media() > 5) {
            return "recuperacao"
        } else {
            return "reprovado"
        }
    }


    static relatorio(alunos: Aluno[]) {
        const alunosOrdenados = [...alunos].sort((a, b) => b.media() - a.media());

        for (let aluno of alunosOrdenados) {
            console.log(`${aluno.nome} - nota: ${aluno.media().toFixed(1)}; situação: ${aluno.situacao()}`);
        }
    }
     
}

const turma: Aluno[] = [
    new Aluno( "Jhean", [8, 9, 7, 10]),
    new Aluno( "Luiz", [7, 9, 4, 5]),
    new Aluno( "Pedro", [9, 5, 4, 0]),
]

Aluno.relatorio(turma)
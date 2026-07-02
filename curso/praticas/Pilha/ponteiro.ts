interface Nod {
    valor: number
    prev: Nod | null 
}

interface Pilha {
    topo: Nod | null;
}

function empilhar(p: Pilha, num: number): void {
    const novo: Nod = {
        valor: num,
        prev: p.topo
    };

    p.topo = novo;
    console.log(`empilhado: ${num}`);
    return;
}

function desempilhar(p:Pilha): void {
    if (p.topo === null) {
        console.log("Não há ninguém para remover")
        return;
    }

    console.log(`desempilhando: ${p.topo?.valor}`);
    p.topo = p.topo!.prev;
    return;
}

function exibirPilha(p:Pilha): void {
    let auxiliar = p.topo;

    console.log("Pilha - topo->base: ")
    while (auxiliar !== null) {
        console.log(`[${auxiliar.valor}]`)
        auxiliar = auxiliar?.prev
    }
    return;
}

const novaPilha:Pilha = {topo: null}

empilhar(novaPilha, 10)
empilhar(novaPilha, 20)
empilhar(novaPilha, 30)
empilhar(novaPilha, 40)
empilhar(novaPilha, 50)
empilhar(novaPilha, 60)
empilhar(novaPilha, 70)

exibirPilha(novaPilha)

desempilhar(novaPilha)
desempilhar(novaPilha)


function testeDeExtresse() {
    let i = 0

    while (i < 9000000) {
        empilhar(novaPilha, i)

        if (i % 2 === 0) {
            desempilhar(novaPilha)
        }

        i++
    }
}

testeDeExtresse()
testeDeExtresse()
testeDeExtresse()
testeDeExtresse()
testeDeExtresse()
testeDeExtresse()
testeDeExtresse()
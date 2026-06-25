/*
**Desafio 11 — Intersection type**

Você já conhece union (`|`) que significa "ou um ou outro". Agora o oposto: intersection (`&`) que significa "os dois ao mesmo tempo".

```typescript
type A = { nome: string }
type B = { idade: number }

type AB = A & B // → { nome: string, idade: number }
```

Útil pra combinar tipos sem repetir código.

---

O desafio: crie três tipos separados:

- `Identificavel` → `{ id: number }`
- `Nomeavel` → `{ nome: string }`
- `Timestampado` → `{ criadoEm: string }`

Combine os três em um tipo `Entidade` usando `&`.

Depois crie uma função `exibirEntidade` que recebe uma `Entidade` e retorna:

```
"[42] Jhean - criado em 2024-01-15"
```

E crie pelo menos dois objetos do tipo `Entidade` pra testar.
*/

type Identificavel = {id: number}
type Nomeavel = {nome:string}
type Timestampado = {criadoEm: string}

type Entidade = Identificavel & Nomeavel & Timestampado

function exibirEntidade(ent: Entidade): string {
    return `[${ent.id}] ${ent.nome} - criado em ${ent.criadoEm}`
}

const ent1:Entidade = {
    id: 1,
    nome: "Jhean",
    criadoEm: new Date().toDateString() 
}

console.log(ent1.criadoEm)
console.log(exibirEntidade(ent1))


function testeExtresse1() {
    let i:Entidade = {id: 0, nome: "", criadoEm: ""}

    
    while (i.id < 1000000) {
    let str = gerarStringAleatoria(15)
        i.nome = str
        i.criadoEm = new Date().toDateString()

        console.log(i)
        i.id++
    }

    function gerarStringAleatoria(tamanho:number) {
        const caracteres = 'ABC DEFGHIJKLM NOPQRSTUV WXYZabcdefgh ijklmnopqrstu vwxyz01234 56789';
        let resultado = '';
        
        for (let i = 0; i < tamanho; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            resultado += caracteres.charAt(indiceAleatorio);
        }
        
        return resultado;
    }
}

testeExtresse1()
testeExtresse1()
testeExtresse1()
testeExtresse1()
testeExtresse1()
testeExtresse1()
testeExtresse1()
testeExtresse1()
testeExtresse1()
testeExtresse1()
testeExtresse1()
testeExtresse1()
// arrays e promises são generics
const arrayNumeros: Array<number> = [1,2,3,4,5,6]

type MeuTipo = number;



async function promiseAsync() {
    return 2
}

function minhaPromise(): Promise<MeuTipo> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(3)
        }, 1000)
    })
}

promiseAsync().then(resultado => console.log(resultado + 2))
minhaPromise().then(resultado => console.log(resultado + 2))
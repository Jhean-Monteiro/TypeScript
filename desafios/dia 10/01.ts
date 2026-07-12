// O que é Destructuring? 
// Destructuring é uma forma de extrair valores de objetos
// ou arrays e coloca-los em variáveis, de forma mais curta e legível

// como seria feito sem destructuring:
type User = {
    name: string,
    age: number
    city: string
}
const user: User = {
    name: "Jhean",
    age: 21,
    city: "Saquarema"
}
// sem destructuring - repetitivo 
/*
let name = user.name
let age = user.age
let city = user.city
*/

// com destructuring, a mesma coisa é feita em uma linha só:
let {name, city, age} = user // não importa a ordem dentro das chaves. só tem que ter o mesmo nome
console.log(name)
console.log(age)

// as chaves { } do lado esquerdo dizem: "pega essas propriedades de dentro do objeto e cria variáveis com esses nomes"



// destructuring de arrays:
// com arrays funciona de forma parecida, mas usando [ ] em vez de { }, e a ordem importa:
const cores = ["vermelho", "verde", "azul"]
const [primeira, segunda, terceira] = cores
console.log(primeira) // vermelho
console.log(segunda) // verde

export{}
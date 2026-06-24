/*
Se o número for múltiplo de 3, em vez de exibir o número, exiba "Fizz".

Se o número for múltiplo de 5, em vez de exibir o número, exiba "Buzz".

Se o número for múltiplo de 3 e de 5 ao mesmo tempo, exiba "FizzBuzz".

Se não for múltiplo de nenhum deles, exiba o próprio número.
*/

function fizzBuzz(limite: number): void {
    const fizz = (limite % 3 === 0)
    const buzz = (limite % 5 === 0)
    const fizzBuzz = ((fizz === true) && (buzz === true))


    if (fizzBuzz === true) {
        console.log("FizzBuzz")
        return;
    } else if (fizz === true) {
        console.log("Fizz");
        return;
    } else if (buzz === true) {
        console.log("Buzz");
        return;
    } else {
        console.log(limite);
        return
    }
}

let i = 0
while (i !== 100) {
    fizzBuzz(i);
    i++;
}

fizzBuzz(7);
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);
fizzBuzz(2);
fizzBuzz(30);
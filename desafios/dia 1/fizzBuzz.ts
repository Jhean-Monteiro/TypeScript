type FizzBuzz = (number | string)[]

function fizBuzz(num: number): FizzBuzz {
    const arr:FizzBuzz = []

    for (let i = 1; i < num+1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz")
        } else if (i % 3 === 0) {
            arr.push("Fizz")
        } else if (i % 5 === 0) {
            arr.push("Buzz")
        } else {
            arr.push(i)
        }
    }

    return arr
}

console.log(fizBuzz(16))

console.log(fizBuzz(9999999))
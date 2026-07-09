type Adder = {
    (x: number): number;
    (x: number, y: number): number;
    (...arg: number[]): number;
}

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
    if (args.length > 0) {
        return args.reduce((s, v) =>  s + v, 0) + x + (y || 0);
    }
    
    return x + (y || 0)
}

console.log(adder(2))
console.log(adder(3, 3))
console.log(adder(3, 2, 9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1,2,3,4))
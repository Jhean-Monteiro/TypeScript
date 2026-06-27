import { isDeepStrictEqual } from "node:util"

type An = Record<string, number>


function isAnagrama(str1: string, str2: string): boolean {
    let arr1 = str1.split("")
    let arr2 = str2.split("")

    const An1: An = {}
    const An2: An = {}

    arr1.forEach(e => {
        if (An1[e] === undefined) {
            An1[e] = 1
        } else {
            An1[e]++
        }
    })

    arr2.forEach(e => {
        if (An2[e] === undefined) {
            An2[e] = 1
        } else {
            An2[e]++
        }
    })

    
    const bol = isDeepStrictEqual(An2, An1)
    return bol;
    
}

console.log(isAnagrama("listen", "silent")) 
console.log(isAnagrama("hello", "world"))   
console.log(isAnagrama("Arara", "arara"))
console.log(isAnagrama("cinema", "iceman"))
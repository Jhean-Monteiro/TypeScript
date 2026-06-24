type Aluna = { nome: string, nota: number }


function calcularMedia(alunas: Aluna[]): number {

    let ac = 0
    for (let aluna of alunas) {
        ac = ac + aluna.nota
    }
    return (ac/alunas.length)
}

const aluna:Aluna = {nome: "Sla", nota: 7.0} 
const aluna2:Aluna = {nome: "Sla", nota: 8.0} 
const aluna3:Aluna = {nome: "Sla", nota: 9.7} 

const alunas:Aluna[] = []
alunas.push(aluna)
alunas.push(aluna2)
alunas.push(aluna3)

const media = calcularMedia(alunas)
console.log("A média geral é:", media)
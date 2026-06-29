type Veiculo = "carro" | "moto" | "caminhao"


function descreverVeiculo(veiculo:Veiculo) {
    if (veiculo === "carro") {
        return "o veiculo é um carro"
    } else if (veiculo === "moto") {
        return "o veiculo é uma moto"
    } else if (veiculo === "caminhao") {
        return "o veiculo é um caminhao"
    }

    const _impossivel: never = veiculo
    throw new Error(`Caso não tratado ${_impossivel}`)
}

for (let i = 0; i < 999999; i++) {
    console.log(descreverVeiculo("carro"))
    console.log(descreverVeiculo("moto"))
    console.log(descreverVeiculo("caminhao"))
}
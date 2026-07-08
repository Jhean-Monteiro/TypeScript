type Estatisticas = {
    min: number
    max: number
    media: number
    mediana: number
    amplitude: number
}

const estatisticas = (arr: number[]): Estatisticas => {
    let min = arr.reduce((atual, menor) => (atual < menor ? atual : menor), arr[arr.length])
    let max = arr.reduce((atual, maior) => (atual > maior ? atual : maior), 0)
    let media = arr.reduce((ac, n) => (ac += n), 0)/arr.length

    let ordenado = [...arr].sort((a, b) => a - b)
    let meio = arr.length/2
    if (ordenado.length % 2 === 0) {
        let meioFrente = Math.floor(ordenado.length/2)
        console.log(ordenado)
        console.log(meioFrente)
        let meioTras = meioFrente-1
        console.log(meioTras)
        meio = ((ordenado[meioFrente]+ordenado[meioTras]) / 2)
    }
    let mediana = meio

    let amplitude = max-min

    return {
        min,
        max,
        media,
        mediana,
        amplitude
    }

}

console.log(estatisticas([3, 8, 7, 9, 20, 9, 1, 1, 4, 1, 5, 9, 2, 6, 5, 8]))

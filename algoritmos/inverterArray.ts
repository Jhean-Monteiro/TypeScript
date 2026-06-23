function inverterArray(lista: number[]): number[] {
    let inicio = 0;
    let fim = lista.length - 1;

    while (inicio < fim) {
        const temporario = lista[inicio];
        lista[inicio] = lista[fim];
        lista[fim] = temporario;

        inicio++;
        fim--;
    }

    return lista;
}


console.log(inverterArray([1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17])); 

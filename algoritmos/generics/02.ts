function zipar<A, B>(arrA: A[], arrB: B[]): [A, B][] {
  const menorTamanho = Math.min(arrA.length, arrB.length);
  const resultado: [A, B][] = [];

  for (let i = 0; i < menorTamanho; i++) {
    resultado.push([arrA[i], arrB[i]]);
  }

  return resultado;
}

function gerarArrayAleatorio(
  tamanho: number,
  min: number,
  max: number,
): number[] {
  return Array.from(
    { length: tamanho },
    () => Math.floor(Math.random() * (max - min + 1)) + min,
  );
}

function testeDeExtresse() {
  let i = 0;
  do {
    const arr1 = gerarArrayAleatorio(100000, 1, 100);
    const arr2 = gerarArrayAleatorio(100000, 1, 100);
    console.log(zipar(arr1, arr2));
    i++;
  } while (i < 100000);
}

testeDeExtresse();
testeDeExtresse();
testeDeExtresse();
testeDeExtresse();
testeDeExtresse();
testeDeExtresse();

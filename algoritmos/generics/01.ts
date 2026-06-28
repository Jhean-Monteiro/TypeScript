
function retornaUltimoEl<T>(arr: T[]): T {
    return arr[arr.length-1]
}

console.log(retornaUltimoEl([1,5,3,4]))
console.log(retornaUltimoEl(["a", "5", "123", "quarto elemento", "claude é melhor que gemini"]))

type Testando = {nome: string, idade: number}
let teste: Testando = {nome:"will", idade:12} 
function gerarArrayAleatorio(tamanho: number) {
  const tipos = ['numero', 'texto', 'booleano', 'nulo', 'testando'];
  
  return Array.from({ length: tamanho }, () => {
    const tipoSorteado = tipos[Math.floor(Math.random() * tipos.length)];

    switch (tipoSorteado) {
      case 'numero':
        return Math.random() * 100; // Gera um número decimal de 0 a 100
      case 'texto':
        return Math.random().toString(36).substring(2, 8); // Gera uma string aleatória
      case 'booleano':
        return Math.random() >= 0.5; // Gera true ou false
      case 'nulo':
        return null;

    case 'testando':
        return teste;
    }
  });
}

console.log(retornaUltimoEl(gerarArrayAleatorio(5000)))

function testeDeExtresse() {
    let i = 0

    while (i < 1000000) {
        console.log(retornaUltimoEl(gerarArrayAleatorio(i)))
        i++;
    }
}

testeDeExtresse()

export{}
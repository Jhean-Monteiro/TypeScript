// nossas duas pilhas. tipado como array de strings, pois guardará urls;
let pilhaHistorico: string[] = [];
let pilhaAvancar: string[] = []

// função: acessar novo site
function visitarPagina(url: string): void {
    pilhaHistorico.push(url); // coloca a nova página no topo da pilha principal

    // regra dos navegadores: ao visitar uma página nova, o histórico "Avançar" é apagado
    pilhaAvancar = [];

    console.log(`[🌐] Acessando: ${url}`)
}

// função: botão "voltar"
function voltar(): void {
    // se a pilha tiver tamanho 1 ou 0, não tem para onde voltar
    if (pilhaHistorico.length <= 1) {
        console.log(`[X] Não é possível voltar mais.`);
        return;
    }

    // o .pop remove a página atual do topo e guarda ela na variavel
    const paginaAtual = pilhaHistorico.pop();

    if (paginaAtual) { // se realmente conseguiu remover a página...
        pilhaAvancar.push(paginaAtual); // joga ela para a pilha de "avançar"
    }

    // como removemos o topo, o novo topo (o ultimo item) agora é a página anterior
    const novaPaginaAtual = pilhaHistorico[pilhaHistorico.length -1]

    console.log(`[<--] Voltando para: ${novaPaginaAtual}`);
}

// função: botão "Avançar"
function avancar(): void {
    // se a pilha estiver vazia, não tem para onde ir
    if (pilhaAvancar.length === 0) {
        console.log(`[X] Não há páginas para avançar.`);
        return;
    }

    // retira o topo da pilha de "Avançar"
    const paginaFutura = pilhaAvancar.pop();

    if (paginaFutura) { // se conseguiu retirar....
        pilhaHistorico.push(paginaFutura); // coloca ela de volta no topo da pilha principal
        console.log(`[-->] Avançando para: ${paginaFutura}`);
    }
}

// função auxiliar para ver o estado atual das pilhas
function mostrarStatus(): void {
    const atual = pilhaHistorico[pilhaHistorico.length - 1] // Pega o último item
    console.log(`--- Status --- | Atual: ${atual || 'Vazio'}`);
}




// TESTANDO O 'NAVEGADOR'

visitarPagina("google.com");
visitarPagina("youtube.com");
visitarPagina("github.com")

mostrarStatus(); // atual: github

voltar(); // volta para o youtube
voltar(); // volta para o google

mostrarStatus(); // atual: google

avancar(); // avança para o youtube

// regra do navegador: se visitar um site novo, perde a chance de "avançar" para o github novamente
visitarPagina("stackoverflow.com");
avancar(); // vai dar erro, pois a pilha "avançar foi zerada"

voltar(); // ainda pode voltar para youtube, que está na lista principal
// 1. tipamos a resposta da API
// A API devolve JSON com esse formato.
// Criam um type para dizer ao TypeScript o que esperar
type Post = {
    id: number
    userId: number
    title: string
    body: string
}


//2. função ASYNC
// essa função vai esperar operações lentas (como internet)
// o retorno é Promise<Post> - uma promessa de que vai retornar um Post

async function buscaPost(id: number): Promise<Post> {
    // fetch faz a requisição para a URL
    // await pausa a função aqui e espera a resposta chegar da internet
    // sem await, o código continuaria antes da resposta chegas
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    // .json() converte o texto JSON que veio da internet em objeto JavaScript.
    // também é assincrono,por isso usa "await".
    // "as Post" diz pro typescript que isso tem o formato de post (o typescript não infere sozinho)
    const dados = await resposta.json() as Post

    return dados
}



// 3. chamando a função:
// Para usar "await" fora de uma função async,
// precisamos de uma função async que envolva a chamada.
// isso é chamado de "IIFE async" - uma função que se chama sozinha

(async () => {
    const post = await buscaPost(1)
    console.log("Título:", post.title)
    console.log("Corpo:", post.body)
    console.log("Post completo:", post)
})();

// 4. buscando vários posts
// Promise.all espera várias requisições ao mesmo tempo
// em vez de uma por vez - muito mais rapido.
(async () => {
    const ids = [1,2,3,4,5,6,7,8,9,10]

    // dispara as 3 requisições ao mesmo tempo
    const posts = await Promise.all(
        ids.map(id => buscaPost(id))
    )

    posts.forEach(post => {
        console.log(`[${post.id}] ${post.title}`)
    })
})();


async function buscarPostsDoUsuario(userId: number): Promise<Post[]> {
    const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

    const dados = await resposta.json() as Post[]

    return dados.filter(post => post.userId === userId)
}

(async () => {
    const posts = await buscarPostsDoUsuario(1)
    console.log(`${posts.length} posts encontrados`)
    posts.forEach(p => console.log(`[${p.id}] ${p.title}`))

    const ids = [1,2,3,4,5,6,7,8,9,10]

    const posts2 = await Promise.all(
        ids.map(id => buscarPostsDoUsuario(id))
    )

    posts2.forEach(p => {
        p.forEach(post => console.log(`[${post.id}] ${post.title}`))
        
    })
})()


async function buscarSeguro(id: number): Promise<Post | null> {
    try {
        const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        
        if (!resposta.ok) {
            console.log(`Erro HTTP: ${resposta.status}`)
            return null
        }
        
        return await resposta.json() as Post
    } catch (erro) {
        console.log("Falha na requisição:", erro)
        return null
    }
}

(async () => {
    const post = await buscarSeguro(1)
    const post2 = await buscarSeguro(99999)
})();
type Livro = {
    titulo: string
    autor: string
    paginas: number
    genero: "fantasia" | "romance" | "terror" | "ficcao" | "epico"
    ebook?: boolean
}


function resumirLivro(livro: Livro): string {
    if (livro.ebook) {
        return `"${livro.titulo} - ${livro.autor} (${livro.paginas} págs) [${livro.genero}] - Disponível em E-book"`
    }
    return `"${livro.titulo} - ${livro.autor} (${livro.paginas} págs) [${livro.genero}]"`
}



const odisseia: Livro = {
    titulo: "The Odyssey",
    autor: "Homero",
    paginas: 1000,
    genero: "epico",
    ebook: false
}

const domQuixote: Livro = {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    paginas: 868,
    genero: "epico",
    ebook: true
};

const oIluminado: Livro = {
    titulo: "O Iluminado",
    autor: "Stephen King",
    paginas: 464,
    genero: "terror",
    ebook: false
};

const duna: Livro = {
    titulo: "Duna",
    autor: "Frank Herbert",
    paginas: 680,
    genero: "ficcao",
    ebook: true
};

const oHobbit: Livro = {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    paginas: 336,
    genero: "fantasia",
    ebook: false
};

const orgulhoEPreconceito: Livro = {
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    paginas: 424,
    genero: "romance"
};


const estante: Livro[] = [orgulhoEPreconceito, odisseia, oHobbit, duna, oIluminado, domQuixote]

console.log(resumirLivro(odisseia))

estante.forEach(livro => {
    console.log(resumirLivro(livro))
})
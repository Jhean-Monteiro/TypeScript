type Evento = 
  | { tipo: "click", elemento: string, x: number, y: number } 
  | { tipo: "teclado", tecla: string, ctrl: boolean } 
  | { tipo: "scroll", direcao: "cima" | "baixo", pixels: number };

function processarEvento(evento: Evento): string {
  switch (evento.tipo) {
    case "click":
      return `Click em #${evento.elemento} na posição (${evento.x}, ${evento.y})`;
    
    case "teclado": {
      const ctrlStr = evento.ctrl ? "sim" : "não";
      return `Tecla: ${evento.tecla}, Ctrl: ${ctrlStr}`;
    }

    case "scroll":
      return `Scroll para ${evento.direcao}: ${evento.pixels}px`;

    default: {
      const _verificacaoExaustiva: never = evento;
      return _verificacaoExaustiva;
    }
  }
}


const clickTeste: Evento = { 
  tipo: "click", 
  elemento: "botao", 
  x: 100, 
  y: 200 
};

const tecladoTeste: Evento = { 
  tipo: "teclado", 
  tecla: "Enter", 
  ctrl: true 
};

const scrollTeste: Evento = { 
  tipo: "scroll", 
  direcao: "baixo", 
  pixels: 150 
};


console.log(processarEvento(clickTeste)); 

console.log(processarEvento(tecladoTeste)); 

console.log(processarEvento(scrollTeste)); 

const campo = document.querySelector<HTMLInputElement>("#campo");
const botao = document.querySelector<HTMLButtonElement>("#botao");
const lista = document.querySelector<HTMLUListElement>("#lista");

let tarefas: string[] = [];

function renderizar(): void {
  if (!lista) return;

  lista.innerHTML = ""; // apaga tudo que estava na tela

  tarefas.forEach((texto, indice) => {
    // cria um <li> pra cada tarefa
    const li = document.createElement("li");
    li.textContent = texto;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    botaoRemover.addEventListener("click", () => {
      remover(indice);
    });

    li.appendChild(botaoRemover);
    lista.appendChild(li);
  });
}

function adicionar(): void {
  if (!campo) return;

  const texto = campo.value.trim()
  if (texto === "") return;

  tarefas.push(texto)
  campo.value = ""
  renderizar()
}

function remover(indice: number): void {
  tarefas.splice(indice, 1);
  renderizar();
}

botao?.addEventListener("click", adicionar);

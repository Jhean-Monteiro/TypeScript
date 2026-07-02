const titulo = document.getElementById("titulo") as HTMLElement
titulo.innerText = "TypeScript no navegador funciona!";


type Teste = {
    texto: string
}

let palavraaa2: Teste = {
    texto: "Esse texto deve aparecer abaixo do titulo"
}

const novo = document.createElement("div")
novo.innerHTML = `${palavraaa2.texto}`
document.body.appendChild(novo)


let button = document.createElement("button")
button.innerHTML = "Clique aqui"
button.addEventListener("click", () => {
    if (palavraaa2.texto === "Esse texto deve aparecer abaixo do titulo") {
        novo.innerHTML = "texto foi alterado pelo click"
        novo.style.color = "blue"
        novo.style.fontFamily = "sans-serif"
        palavraaa2.texto = ""
    } else {
        novo.innerHTML = "Esse texto deve aparecer abaixo do titulo"
        novo.style.color = "red"
        novo.style.fontFamily = "Papyrus"
        palavraaa2.texto = "Esse texto deve aparecer abaixo do titulo"
    }
})
document.body.appendChild(button)
const tag = document.createElement("br")



let button2 = document.createElement("button")
button2.innerHTML = "Clique aqui"
document.body.appendChild(button2)

button2.addEventListener("click", () => {
    if (button2.style.background === "cyan") {
        button2.innerHTML = "Jackson"
        button2.style.width = "200px"
        button2.style.height = "200px"
        button2.style.background = "red"
        button2.style.color = "white"
        button2.style.margin = "50%"
        button2.style.borderRadius = "50%"
        button2.style.transition = "2s"
        button2.style.border = "solid gold 10px"
        button2.style.rotate = "5000000deg"
    } else {
        button2.innerHTML = "Julian"
        button2.style.background = "cyan"
        button2.style.margin = "0%"
        button2.style.color = "black"
        button2.style.transition = "2s"
        button2.style.borderRadius = "0%"
        button2.style.border = "solid green 5px"
        button2.style.rotate = "8888888deg"
    }
})
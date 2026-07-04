import isEmail from "validator/lib/isEmail"

const SHOW_ERROR_MESSAGES = "show-error-message"

const form = document.querySelector(".form") as HTMLFormElement
const username = document.querySelector(".username") as HTMLInputElement
const email = document.querySelector(".email") as HTMLInputElement
const password = document.querySelector(".password") as HTMLInputElement
const password2 = document.querySelector(".password2") as HTMLInputElement

form.addEventListener("submit", function(event) {
    event.preventDefault()
    hideErrorMessages(this)
    checkForEmptyFields(username, email, password, password2)
    checkEmail(email)
    checkSenha(password, password2)
    if(shouldSendForm(this)) console.log("Formulario Enviado")
})

function checkSenha(input: HTMLInputElement, input2: HTMLInputElement): void {
    if (input.value.length < 10 && input.value !== "") {
        showErrorMessage(input, "a senha não pode terr menos de 10 caracteres")
        return
    }
    if (input.value !== input2.value) showErrorMessage(input2,"Os campos precisam ser iguais")
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach(input => {
        if (!input.value) showErrorMessage(input, "Campo não Pode Ficar Vazio")
    })
}

function checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) showErrorMessage(input,"Email-invalido")
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach(item => {
        item.classList.remove(SHOW_ERROR_MESSAGES)
    })
}


function showErrorMessage(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement
    const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement

    errorMessage.innerText = msg
    formFields.classList.add(SHOW_ERROR_MESSAGES)
}

function shouldSendForm(form:HTMLFormElement): boolean {
    let send = true

    form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach(() => (send = false))
    return send
}
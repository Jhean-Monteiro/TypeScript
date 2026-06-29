type CampoFormulario = {
    valor: string
    erro?: string
    tocado: boolean
}

function validarCampo(formulario: CampoFormulario): string {
    if (formulario.tocado === false) {
        return "campo não tocado"
    } else {
        if (formulario.erro) {
            return `Erro: ${formulario.erro}`
        }

        return `Valido: ${formulario.valor}`
    }
}

console.log(validarCampo({ valor: "Jhean", tocado: false }))
console.log(validarCampo({ valor: "", tocado: true, erro: "campo obrigatório" })
)
console.log(validarCampo({ valor: "Jhean", tocado: true })
)
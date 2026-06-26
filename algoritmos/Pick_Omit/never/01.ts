function desafio() {
    type Forma = "circulo" | "quadrado" | "triangulo" | "pentagono"

    function descreverForma(forma:Forma): string {
        if (forma === "circulo") {
            return `O circulo é redondo kkkk`
        }
        if (forma === "quadrado") {
            return `O quadrado é quadrilátero`
        }
        if (forma === "triangulo") {
            return `O triangulo tem tres lados`
        }
        if (forma === "pentagono") {
            return `O pentagono tem 5 lados`
        }

        const nunca: never = forma
        return nunca
    }

    let i = 0
    let j = 0
    const forma = ["circulo", "quadrado", "triangulo", "pentagono"]
    while (i < 9999999) {
        

        let forma2 = forma[j]

        forma[0]

        switch (forma2) {
            case "circulo":
            console.log(descreverForma("circulo"));

            case "quadrado":
            console.log(descreverForma("quadrado"));

            case "triangulo":
            console.log(descreverForma("triangulo"));

            case "pentagono":
            console.log(descreverForma("pentagono"));
        }

        j++
        if (j === 3) {
            j = 0
        }
        i++
    }
}

desafio()
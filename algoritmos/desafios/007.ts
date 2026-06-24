enum StatusPedido {
    Pendente,
    Enviado,
    Entregue
}

function descreverStatus(status:StatusPedido): string {
    if (status === StatusPedido.Pendente) return "Seu pedido está pendente."
    if (status === StatusPedido.Enviado) return "Seu pedido foi enviado!"
    return "Seu pedido foi entregue!"
}

console.log(descreverStatus(StatusPedido.Pendente))
console.log(descreverStatus(StatusPedido.Enviado))
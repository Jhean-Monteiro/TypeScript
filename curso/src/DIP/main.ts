/*
Módulos de alto nível não devem depender de módulos de baixo nível. ambos devem depender de abstrações.
dependa de abstrações, não de implementações.
abstrações não devem depender de detalhes. detalhes devem depender de abstrações

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível
*/// atenção aqui, OC: o que é módulo de alto nível e de baixo nível?

import { ShoppingCart } from "./entities/shopping-cart"
import { Order } from "./entities/order"
import { Messaging } from "./services/message"
import { Persistency } from "./services/persistency"
import { Product } from "./entities/product"
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from "./entities/discount"
import { EnterprizeCustomer, IndividualCustomer } from "./entities/customer"
import { MessagingProtocol } from "./entities/interfaces/messaging-protocol"

const noDiscount = new NoDiscount()

const tenPercentDiscount = new TenPercentDiscount()

const fiftyPercentDiscount = new FiftyPercentDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()

const individualCustomer = new IndividualCustomer("Jhean", "Monteiro", "222-222-222-22")
const enterprizeCustomer = new EnterprizeCustomer("Jhean", "342342342423", "empresa milionaria kk")


/*/ mock
class MessagingMock implements MessagingProtocol {
    sendMessage(msg: string): void {
        console.log("mensagem enviada pelo MOCK")
    }
}
const messagingMock = new MessagingMock()
*/
const order = new Order(
    shoppingCart, 
    messaging, 
    persistency, 
    enterprizeCustomer
)


shoppingCart.addItem(new Product("Shirt", 50))
shoppingCart.addItem(new Product("Deck", 5))
shoppingCart.addItem(new Product("Card", 15))

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.totalWithDiscount())

order.checkOut()

console.log(order.orderStatus)


let estoque: Record<string, number> = {}

function adicionar(estoque: Record<string,number>, produto: string, quantidade: number): Record<string,number> {
    estoque[produto] = (estoque[produto] ?? 0) + quantidade

    return estoque
}

adicionar(estoque, "mouse", 10)
adicionar(estoque, "teclado", 10)
adicionar(estoque, "tela", 10)
adicionar(estoque, "hd", 10)
adicionar(estoque, "mouse", 10)

console.log(estoque)
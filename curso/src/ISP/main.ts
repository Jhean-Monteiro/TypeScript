/*
Interface segregation principle (Principio da segregação de Interface) - os clientes não devem ser forçados a depender de interfaces que não utilizam
*/// PS: aqui usa a palavra 'interface', mas ela não serve apenas para interfaces (do typescript). ela pode se referir a qualquer protocolo (type, interfaces ou classes abstratas)  

import { ShoppingCart } from "./entities/shopping-cart"
import { Order } from "./entities/order"
import { Messaging } from "./services/message"
import { Persistency } from "./services/persistency"
import { Product } from "./entities/product"
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from "./entities/discount"
import { EnterprizeCustomer, IndividualCustomer } from "./entities/customer"

const noDiscount = new NoDiscount()

const tenPercentDiscount = new TenPercentDiscount()

const fiftyPercentDiscount = new FiftyPercentDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()

const individualCustomer = new IndividualCustomer("Jhean", "Monteiro", "222-222-222-22")
const enterprizeCustomer = new EnterprizeCustomer("Jhean", "342342342423", "empresa milionaria kk")

const order = new Order(shoppingCart, messaging, persistency, enterprizeCustomer)


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
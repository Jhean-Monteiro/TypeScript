/**
 * PRINCÍPIO DA SUBSTITUIÇÃO DE LISKOV (LSP)
 * 
 * Uma classe filha deve poder substituir sua classe pai 
 * sem alterar o comportamento correto do sistema.
 * 
 * Regra de ouro: A subclasse não pode quebrar as expectativas 
 * criadas pela superclasse (ex: lançar exceções inesperadas).
 * 
 * se meu programa espera um Animal, algo do tipo Cachorro (que herda animal) deve servir como qualquer outro animal
 */

import { ShoppingCart } from "./entities/shopping-cart"
import { Order } from "./entities/order"
import { Messaging } from "./services/message"
import { Persistency } from "./services/persistency"
import { Product } from "./entities/product"
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from "./entities/discount"

const noDiscount = new NoDiscount()

const tenPercentDiscount = new TenPercentDiscount()

const fiftyPercentDiscount = new FiftyPercentDiscount()
const shoppingCart = new ShoppingCart(noDiscount)
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency)


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
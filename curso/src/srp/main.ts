import { ShoppingCart } from "./entities/shopping-cart"
import { Order } from "./entities/order"
import { Messaging } from "./services/message"
import { Persistency } from "./services/persistency"
import { Product } from "./entities/product"

const shoppingCart = new ShoppingCart()
const messaging = new Messaging()
const persistency = new Persistency()
const order = new Order(shoppingCart, messaging, persistency)


shoppingCart.addItem(new Product("Shirt", 50))
shoppingCart.addItem(new Product("Deck", 5))
shoppingCart.addItem(new Product("Card", 15))

console.log(shoppingCart.items)
console.log(shoppingCart.total())

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
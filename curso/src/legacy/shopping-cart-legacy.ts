type CartItem = { name: string, price: number }

type OrderStatus = "open" | "closed"

export class ShoppingCartLegacy {
    private readonly _items: CartItem[] = []
    private _orderStatus: OrderStatus = "open"

    addItem(item: CartItem): void {
        this._items.push(item)
    }

    removeItem(index: number): void {
        this._items.splice(index, 1)
    }

    get items(): Readonly<CartItem[]> {
        return this._items
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus
    }

    total(): number {
        return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2)
    }

    checkOut(): void {
        if (this.isEmpty()) {
            console.log("Seu carrinho está vazio");
        } else {
            this._orderStatus = "closed";
            this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido`);
            this.saveOrder();
            this.clear();
        }

    }
    isEmpty(): boolean {
        return this._items.length === 0
    }

    sendMessage(msg: string) {
        console.log("Mensagem enviada:", msg)
    }

    saveOrder(): void {
        console.log("Pedido salvo com sucesso")
    }

    clear() {
        console.log("Carrinho de compras foi limpo...")
        this._items.length = 0
    }
}


const shoppingCart = new ShoppingCartLegacy()
shoppingCart.addItem({ name: "Shirt", price: 20.00 })
shoppingCart.addItem({ name: "Shoe", price: 35.00 })
shoppingCart.addItem({ name: "Book", price: 50.00 })
// shoppingCart.clear()

console.log(shoppingCart.items)
console.log(shoppingCart.total())
shoppingCart.checkOut()

console.log(shoppingCart.orderStatus)
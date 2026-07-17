// detalhe: importa apenas da pasta "interfaces"
import { OrderStatus } from "./interfaces/order-status"
import { CustomerOrder } from "./interfaces/customer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";

export class Order {
    private _orderStatus: OrderStatus = "open"


    constructor( // todas atualizadas para dependerem de abstrações (protocolos)
        private readonly cart: ShoppingCartProtocol, 
        private readonly messaging: MessagingProtocol, 
        private readonly persistency: PersistencyProtocol,
        private readonly customer: CustomerOrder // uma abstração
    ) { }

    get orderStatus(): OrderStatus {
        return this._orderStatus
    }

    checkOut(): void {
        if (this.cart.isEmpty()) {
            console.log("Seu carrinho está vazio");
        } else {
            this._orderStatus = "closed";
            this.messaging.sendMessage(`Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`);
            this.persistency.saveOrder();
            this.cart.clear();
            console.log('O cliente é:', 
                this.customer.getName(),
                this.customer.getIDN()
            )
        }

    }
}
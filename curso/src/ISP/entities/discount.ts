export abstract class Discount {
    protected discount = 0


    calculate(price: number): number {
        return price - price * (this.discount)
    }
}

export class FiftyPercentDiscount extends Discount {
    protected readonly discount = 0.5
}

export class TenPercentDiscount extends Discount {
    protected readonly discount = 0.1
}

export class NoDiscount extends Discount {
    // muda o comportamento da classe discount. mas não muda o funcionamento do programa
    calculate(price: number): number {
        return price
    }
}
class ContaBancaria {
    readonly titular: string
    private _saldo: number = 0

    constructor(titular: string) {
        this.titular = titular
    }

    get saldo() {
        return this._saldo
    }

    depositar = (valor: number) => {
        if (valor > 0) this._saldo += valor
        else {console.log("o valor precisa ser maior que 0")}
    }

    sacar = (valor: number) => {
        if (valor > this._saldo) {
            console.log("não pode sacar mais do que você tem")
            return
        }
        this._saldo -= valor
    }

}


const conta = new ContaBancaria("Jhean")
conta.depositar(1000)
conta.sacar(200)
console.log(conta.saldo) 
conta.sacar(1000)       
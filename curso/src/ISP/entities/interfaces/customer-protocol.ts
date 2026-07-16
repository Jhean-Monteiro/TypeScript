export interface CustomerOrder {
    getName(): string
    getIDN(): string
}

export interface IndividualCustomerProtocol {
    firstName: string
    lastName: string
    cpf: string
}

export interface EnterprizeCustomerProtocol {
    name: string
    cnpj: string
}
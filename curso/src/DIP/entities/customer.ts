import { IndividualCustomerProtocol, EnterprizeCustomerProtocol, CustomerOrder } from "./interfaces/customer-protocol";

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
    firstName: string;
    lastName: string;
    cpf: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.cpf = cpf
    }

    getName(): string {
        return this.firstName + ' ' + this.lastName
    }
    getIDN(): string {
        return this.cpf
    }
}

export class EnterprizeCustomer implements EnterprizeCustomerProtocol, CustomerOrder {
    name: string;
    cnpj: string;

    constructor(firstName: string, lastName: string, cnpj: string) {
        this.name = firstName
        this.cnpj = cnpj
    }

    getName(): string {
        return this.name
    }

    getIDN(): string {
        return this.cnpj
    }
}
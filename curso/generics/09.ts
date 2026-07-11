// Utility types - generics padrão no typescript



const pessoa: Record<number, string> = {
    1: "pedro",
    2: "silva"
}

console.log(pessoa[1] = "pedrooo")

type PessoaProtocol = {
    nome?: string,
    sobrenome?: string,
    idade?: number
}


// Required
type PessoaRequired = Required<PessoaProtocol>

// Partial
type PessoaPartial =  Partial<PessoaRequired>

// Readonly
type PessoaReadonly = Readonly<PessoaRequired>


// Extract & Exclude
type ABC = "A"  | "B" | "C"
type CDE = "C"  | "D" | "E"
type TipoExclude = Exclude<ABC, CDE>
type TipoExtract = Extract<ABC, CDE>




type AccountMongo = {
    _id: string
    nome: string
    idade: number
}
/*
type AccountApi = {
    id: string
    nome: string
    idade: number
}
*/ 
// pick
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {  // seria o mesmo que usar Omit<> só pra "_id"?
    id: string
}
const accountMongo: AccountMongo = {
    _id: 'asdasf5jsbdfo9sokdng2s',
    nome: "Jhean",
    idade: 30
}

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const {_id, ...accountData} = accountMongo;

    return {...accountData, id: _id}
}

const accountApi = mapAccount(accountMongo)

console.log(accountApi)

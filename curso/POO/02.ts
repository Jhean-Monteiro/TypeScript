// singleton
export class Database {
    private static database: Database

    private constructor(private host: string, private user: string, private password: number) { }

    connect(): void {
        console.log`Conectado: ${this.host}, ${this.user}, ${this.password}`
    }

    static getDatabase(host: string, user: string, password: number): Database {
        if (Database.database) return Database.database
        Database.database = new Database(host, user, password)
        return Database.database
    }
}

const database = Database.getDatabase("localhost", "hoot", 123456)

const database2 = Database.getDatabase("localhost", "hoot", 123456)

console.log(database === database2)
export type Client = {name: string, birthDate: string, cpf: string, balance: number, transactions: Transaction[] }

export type Transaction = {value: number, date: string, description: string }

export type Date = { year: number, month: number, day: number}

export const clients: Client[] = [
    {
        name: "Karen",
        birthDate: "01/01/1900",
        cpf:"123.456.789-01",
        balance: 0,
        transactions: []
    }
]


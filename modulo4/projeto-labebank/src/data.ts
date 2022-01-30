export type Client = { name: string, birthDate: string, cpf: string, balance: number, transactions: Transaction[] }

export type Transaction = { value: number, date: string, description: string }

export type Date = { year: number, month: number, day: number }

export const clients: Client[] = [
    {
        name: "Karen",
        birthDate: "01/01/1990",
        cpf: "123.456.789-01",
        balance: 0,
        transactions: []
    },
    {
        name: "Elizabete",
        birthDate: "01/01/1960",
        cpf: "123.456.789-02",
        balance: 0,
        transactions: []
    }
]


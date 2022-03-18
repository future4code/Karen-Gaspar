import { User, performPurchase } from '../src/index'

describe('Testes automatizados', () => {

    test("Teste saldo maior que a compra", () => {
        const user: User = {
            name: "Karen",
            balance: 100
        }

        const result = performPurchase(user, 40)

        expect(result).toEqual({
            name: "Karen",
            balance: 60
        })
    })

    test("Teste saldo igual a compra", () => {
        const user: User = {
            name: "Renan",
            balance: 50
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Teste saldo menor que a compra", () => {
        const user: User = {
            name: "Elizabete",
            balance: 30
        }

        const result = performPurchase(user, 50)

        expect(result).not.toBeDefined()
    })

})
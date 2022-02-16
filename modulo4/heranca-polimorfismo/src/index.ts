// Exercício 1

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
}
const user = new User('user1', 'user@email.com', 'Karen', 'mypassword')
console.log({id: user.getId(), name: user.getName(), email: user.getEmail()})

// Exercício 2

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}
const customer = new Customer('customer1', 'customer@email.com', 'Rodrigo', 'mypassword', '78946123')

// Exercício 3

console.log({
    id: customer.getId(), 
    name: customer.getName(), 
    email: customer.getEmail(),
    purchaseTotal: customer.purchaseTotal,
    creditCard: customer.getCreditCard()
 })


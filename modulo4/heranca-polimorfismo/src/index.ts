// Exercício Herança

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

    public introduceYourself(): string {
        return `Olá, ${this.name}. Bom dia!`
    }
}
const user = new User('user1', 'user@email.com', 'Karen', 'mypassword')
console.log({ id: user.getId(), name: user.getName(), email: user.getEmail() })


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
customer.introduceYourself()

console.log({
    id: customer.getId(),
    name: customer.getName(),
    email: customer.getEmail(),
    purchaseTotal: customer.purchaseTotal,
    creditCard: customer.getCreditCard(),
    introduction: customer.introduceYourself()
})

// Exercíco Polimorfismo

export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;

}

const client: Client = {
    name: "Karen",
    registrationNumber: 101,
    consumedEnergy: 123,

    calculateBill: () => {
        return 2;
    }
}
//   console.log({
//       name: client.name, 
//       registrtionNumber: client.registrationNumber, 
//       consumedEnergy: client.consumedEnergy,
//       bill: client.calculateBill()
//     })
console.log(client)

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}
// const place = new Place ()

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        cep: string
    ) {
        super(cep);
    }
    public getResidentsQuantity(): number{
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        cep: string
    ) {
        super(cep);
    }
    public getfloorsQuantity(): number{
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        cep: string
    ) {
        super(cep);
    }
    public getmachinesQuantity(): number{
        return this.machinesQuantity
    }
}

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

// a) Resposta: Nenhuma.

// b) Resposta: Uma só vez. Porque seu constructor está sendo acessado.
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
      ){
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
  const user = new User ('user1', 'user@email.com', 'Karen', 'mypassword' )

  //a) Resposta: Não seria possível imprimir o password porque ele está encapsulado 
  // em private e não há um getter acessando a propriedade.

  //b) Resposta: Uma só vez

  
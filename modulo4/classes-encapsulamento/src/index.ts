// Exrcício 1

// a) Resposta: O construtor serve para dar nomes aos atributos da classe e o 
// chamamos quando instaciamos a classe.

// b) Resposta: O console log a princípio não imprime nada, pois o tipo Transaction 
// não está criado para a propriedade onde ele é declarado, mas ao tipar esse propriedade 
// o console foi impresso apenas uma vez no terminal.


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}

const account = new UserAccount("222-333-444-55", "Ana", 25)

// c) Resposta: Criando métodos públicos (getters/setter) conseguimos ter acesso às propriedades privadas

//Exercício 2

//Resposta:

// Exercício 3

// Resposta:


### Exercício 1

a) Acho coerente o uso de strings para representar id, uma vez que esse tipo permite que diversos caracteres façam parte do id, havendo menos risco de um conflito. É melhor que somente números, pelo memso motivo citado.


### Exercício 2

a) O código no enunciado começa com a conexão feita do nosso arquivo de códigos com o banco de dados através do knex e no mesmo espaço há um código de criação de dados de usuário para serem inseridos em uma tabela.

b) 
```
CREATE TABLE users_table (
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);
```

### Exercício 3

a) o "as string" converte o dado vindo do env em string, se não usarmos dará um erro porque esse dado vem inicialmente como um objeto.

### Exercício 7

a) As any tipa a variável para que essa receba qualquer valor.


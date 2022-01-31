## INTRODUÇÃO A SQL

### Query inicial para criar a tabela

```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

### Exercício 1
a) Resposta: Os demais comando usados são o VARCHAR que representa string com limitação de caracteres, o PRIMARY KEY que representa a chave principal de identificação, o NOT NULL que impede que falte um valor e o DATE que representa uma data no formato (YYYY-MM-DD) 
b) Resposta: SHOW DATABASES mostra a database que estou usando e SHOW TABLES mostra as tabelas que há dentro da database.
c) Resposta: DESCRIBE Actor mostra a tabela preenchida com os objetos e seus respectivos comandos.

### Exercício 2
a) Resposta:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");

```

b) Resposta: Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' = esse erro aconteceu porque o valor da id, que é um elemento primary key, está duplicado e ele deve ser único.

```
INSERT INTO Actor (id, name, salary, birth_date, gender) 
VALUES ("002", "Fernanda Montenegro", 1800000, "1929-10-16", "female")	
```
c) Resposta: Error Code: 1136. Column count doesn't match value count at row 1 = esse erro ocorreu porque não foi pedido os parametros birth_date e gender na primeira linha.
Query correta:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) Resposta: Error Code: 1364. Field 'name' doesn't have a default value = esse erro ocorreu porque não há valor a ser inserido na coluna name e ela é NOT NULL, isso signfica que name precisa estar declarado tanto na inserção quanto nos valores:
Query correta:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

```
e) Resposta: Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 = esse erro ocorreu porque o valor de birth_date está declarado como número ao invés de string (entre "").
Query corret:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f) Resposta:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Alinne Moraes",
  150000,
  "1982-12-22", 
  "female"
),
(
  "007", 
  "Cauã Reymond",
  150000,
  "1980-05-20", 
  "male"
);

```

### Exercício 3

a) Query resposta:

```
SELECT * from Actor WHERE gender = "female";

```
b) Query resposta:

```
SELECT salary from Actor WHERE name = "Tony Ramos";

```
c) Resposta: 0 row(s) returned = a query retornou uma tabela vazia, pois não há nenhum gender com valor inválido.

```
SELECT * from Actor WHERE gender = "invalid";
```

d) Query resposta:

```
SELECT id, name, salary from Actor WHERE salary >= 500000;

```

e) Resposta: Error Code: 1054. Unknown column 'nome' in 'field list' = esse erro ocorreu porque o nome da coluna a retornar está como nOme ao invés de nAme.

Query correta:

```
SELECT id, name from Actor WHERE id = "002";
```
### Exercício 4

a) A query acima pede que todos as colunas sejam trazidas desde que o nome dos atores comecem com A ou J e tenham salários acima de 500000.

b) Query resposta:

```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

```
c) Query resposta:

```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%";
```
d) Query resposta:

```
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5

a) Resposta: a query possui as colunas id no tipo VARCHAR e é o PK da tabela, o name também é VARCHAR com limitaçõ de 255 caracteres, a synopsis é do tipo TEXT que é string sem limitação de caracteres, o release_date é do tipo DATE que traz o formato de data e o rating é do tipo número inteiro. Todos devem ser preenchidos para que a query funcione.

Query resposta:
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
)
```

b) Query resposta:

```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
```

c) Query resposta:

```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);
```

d) Query resposta:

```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
```
e) Query resposta:

```
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES (
"004",
"O Auto da Compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
"2000-07-15",
10
);
```

### Exercício 6

a) Query resposta:

```
SELECT id, name, rating FROM Movie WHERE id = "003";
```
b) Query resposta:

```
SELECT * FROM Movie WHERE name = "Auto da Compadecida";
```
c) Query resposta:

```
SELECT id, name, synopsis FROM Movie WHERE rating >= 7;
```

### Exercício 7

a) Query resposta:

```
SELECT * FROM Movie WHERE name LIKE "%vida%"; 
```
b) Query resposta:

```
SELECT * FROM Movie WHERE name LIKE "%flor%" OR synopsis LIKE "%flor%"; 
```

c) Query resposta:

```
SELECT * FROM Movie WHERE release_date < "2022-01-31";
```

d) Query resposta:

```
SELECT * FROM Movie WHERE (name LIKE "%flor%" OR synopsis LIKE "%flor") AND launch_date < "2022-01-31" AND rating > 7;
```

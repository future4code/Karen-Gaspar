### Exercício 1

a) Resposta: O comando dessa query deleta toda a coluna salary da tabela.

b) Resposta: O comando dessa query muda o título da coluna de gender para sex mantendo o parametro de varchar(6).

c) Resposta: O comando dessa query mantém o título da coluna como gender, mas muda o limite do parametro varchar para 255 caracteres.

d) Query resposta:

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
```

### Exercício 2

a) Query resposta:

```
UPDATE Actor SET name = "Moacyr Franco", birth_date = "1936-10-05" WHERE id = "003";
```
b) Query resposta:

```
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";

UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
```

c) Query resposta:
```
UPDATE Actor SET name = "Giovana Antonelli", birth_date = "1976-03-18", salary = 800000, gender = "female" WHERE id = "005";
```

d) Resposta: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 = essa resposta significa que nenhuma linha foi afetada com o comando pois nenhuma linha com o id informado foi encontrada.

Query usada:
```
UPDATE Actor SET name = "Fernanda Montenegro", birth_date = "1929-10-16" WHERE id = "008";
```
### Exercício 3

a) Query resposta:

```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b) Query resposta:

```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```
### Exercício 4

a) Query resposta:
```
SELECT MAX(salary) FROM Actor;
```
b) Query resposta:
```
SELECT MIN(salary) FROM Actor;
```

c)  Query resposta:
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d) Query resposta:
```
SELECT SUM(salary) FROM Actor;
```
### Exercício 5

a) Resposta: Os comandos da query são para contar a quantidade de gêneros e agrupá-los pelo seus valores, sendo assim ele retorna 3 male e 3 female.

b) Query resposta:
```
SELECT id, name FROM Actor ORDER BY name DESC;
```
C) Query resposta:
```
SELECT * FROM Actor ORDER BY salary ASC;
```
d) Query resposta:

```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```
e) Query resposta:

```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```
### Exercício 6

a) Query resposta:

```
ALTER TABLE Movie ADD playing_limit_date VARCHAR(255) NOT NULL;
```

b) Query resposta:

```
ALTER TABLE Movie CHANGE rating rating FLOAT NOT NULL;
```

c) Query resposta:
```
UPDATE Movie SET playing_limit_date = "2022-03-01" WHERE id = "003";

UPDATE Movie SET playing_limit_date = "2021-12-31" WHERE id = "004";
```
d) Resposta: 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 = essa resposta significa que nenhuma linha foi afetada com o comando pois nenhuma linha com o id informado foi encontrada.

Queries usadas:

```
DELETE FROM Movie WHERE id = "003";

UPDATE Movie SET synopsis = "Durante o carnaval de 1943 na Bahia, Vadinho, um mulherengo e jogador inveterado, morre repentinamente." WHERE id = "003";
```

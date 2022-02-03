### Exercício 1

a) Resposta: a chave estrangeira (FOREIGN KEY) é a chave que relaciona uma tabela com outra e deve sempre ser usada para referenciar com o PRIMARY KEY da outra tabela.

b) Query resposta:
```
INSERT INTO Rating VALUES
("001", "Muito engraçado", 7, '001'),
("002", "Emocionante", 6, '002'),
("003", "O melhor filme nacional á feito", 10, '004');
```

c)  Resposta: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-karen-alves-de-santana-gaspar`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)) = esse erro ocorreu porque porque não existe nenhuma linha na tabela movie com o id que eu coloquei na query:

```
INSERT INTO Rating VALUES
("004", "Muito bom", 8, '003');
```

d)  Resposta:
```
ALTER TABLE Movie DROP COLUMN rating;
```

e)  Resposta: 1 row(s) affected = o filme foi deletado, a query funcionou.
```
DELETE FROM Rating WHERE Movie_id = "002";
```

### Exercício 2

a) Resposta: Essa é uma tabela que une os ids da tabela Actor com a tabela Movie. Isso é possível porque na query de criação são usadas uma FOREIGN KEY para cada referencia (uma de cada tabela).

b) Query resposta:
```
INSERT INTO MovieCast VALUES 
    ("001", "001"), 
    ("001", "002"), 
    ("004", "004"), 
    ("002", "006"), 
    ("002", "002"), 
    ("001", "007");
```

c)  Resposta: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-karen-alves-de-santana-gaspar`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))  = esse erro ocorreu porque porque não existe nenhuma linha na tabela Actor com o id que eu coloquei como referência na query:

```
INSERT INTO MovieCast VALUES ("001", "003");
```

d)  Resposta: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-karen-alves-de-santana-gaspar`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)) = esse erro aconteceu porque o atro com o id informado na query está relacionado com a tabela MovieCast, onde seu id está referenciado.

```
DELETE FROM Actor WHERE id = "002";
```

### Exercício 3

a) Resposta: o ON é o operador de condição para relacionar uma coluna de uma tabela com a mesma coluna de outra.

b) Query resposta:
```
SELECT m.name as name, m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```
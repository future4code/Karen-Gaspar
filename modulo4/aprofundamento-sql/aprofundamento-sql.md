### Exercício 1

a) Resposta: O comando dessa query deleta toda a coluna salary da tabela.

b) Resposta: O comando dessa query muda o título da coluna de gender para sex mantendo o parametro de varchar(6).

c) Resposta: O comando dessa query mantém o título da coluna como gender, mas muda o limite do parametro varchar para 255 caracteres.

d) Query resposta:

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
```
### Exercício 1

a) A resposta no terminal foi a o a tabela com o ator de id 001.

b) Query resposta:

```
const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE name = "${name}"
   `)
   return result
}
```

c) Query resposta: 
```

```





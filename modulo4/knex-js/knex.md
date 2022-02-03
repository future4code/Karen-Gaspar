### Exercício 1

a) A resposta no terminal foi a tabela com os dados do ator de id 001.

b) Função resposta:

```
const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE name = "${name}"
   `)
   return result [0][0]
}
```

c) Função resposta: 
```
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
}
```

### Exercício 2

a) Função resposta:
```
const updateActor = async (id: string, salary: number): Promise<any> => {
   await connection("Actor")
    .update({
    salary: salary,
    })
    .where("id", id);
}
```

//b) Função resposta:
```
const deleteActor = async (id: string): Promise<void> => {
   await connection("Actor")
    .delete()
    .where("id", id);
}
```
c) Função resposta:
```
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
}
```
### Exercício 3

a) Endpoint resposta:

```
app.get("/actor/:id", async (req: Request, res: Response) =>{
   try {
      const id = req.params.id;
      const actor = await getActorById(id)

      res.status(200).send(actor)
   }catch(error: any){
      res.status(500).send({message: error.message})
   }
})
```
b) Endpoint resposta:

```
app.get("/actor", async (req: Request, res: Response)=>{
   try {
      const gender = req.query.gender as string
      const count = await countActors(gender)
      res.status(200).send({quantity: count})
   }catch(error: any){
      res.status(400).send({message: error.sqlMessage || error.message})
   }
})
```

### Exercício 4

a) Endpoint resposta:

```

```

b) Endpoint resposta:

```

```
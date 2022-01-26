// Exercicio 5

type users = { name: string, email: string, role: string}

const usersInfo: users[] =
[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

function getUsersAdmin(arrayDeUsers: users[]):string[] {
    return arrayDeUsers
    .filter((user)=>{
        return user.role === "admin"
    })
    .map((user)=> {
        return user.email
    })
}
console.log(getUsersAdmin(usersInfo))
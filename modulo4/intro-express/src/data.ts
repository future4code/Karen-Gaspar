type Users = { id: number, name: string, phone: number | string , email: string, website: string }
type Posts = { id: number, title: string, body: string, userId: number }


// Achei mais fácil criar o array de posts fora do de usuários, pois não consegui tipar os objetos com o array dentro.

export const users: Users [] = [
    {
            id: 1,
            name: "Karen",
            phone: "789-456-456",
            email: "ka@ka.com",
            website: "https://github.com/KarenGaspar"
      },
    {
            id: 2,
            name: "Rodrigo",
            phone: "789-456-455",
            email: "ro@ro.com",
            website: "https://github.com/RodrigoSantos"
      }
]

export const posts: Posts[] = [
    {
        id: 10,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            userId: 1,
    },
    {
        id: 11,
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
            userId: 2,
    }
]

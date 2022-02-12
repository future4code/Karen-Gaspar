import { baseUrl } from "./baseUrl"
import axios from 'axios'

// Exercício 4

// a) Resposta: O tipo é o void, pois o método put não tem return.

// b) Resposta: 

const news = {
    title: "Notícia nova",
    content: "Conteúdo novo",
    date: Date.now()
}

const createNews = (news: any):Promise<void> => {
    return axios.put(`${baseUrl}/news`, news)
}
createNews(news).then(console.log)
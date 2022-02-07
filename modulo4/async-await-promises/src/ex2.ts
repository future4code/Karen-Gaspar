import { baseUrl } from "./baseUrl"
import axios from 'axios'

// Exercício 2

//a) A diferença de sintaxe é somente na primeira linha do código, onde excluímos o "function", 
// declaramos o nome da função como uma variável, e colocamos o async antes do ()=>.

//b)

const getAllSubscribers = async ():Promise<any[]> => {
    const result = await axios.get(`${baseUrl}/subscribers`)
    return result.data
}

getAllSubscribers().then(console.log)

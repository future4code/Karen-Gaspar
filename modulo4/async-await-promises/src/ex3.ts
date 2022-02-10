import { baseUrl } from "./baseUrl"
import axios from 'axios'

// Exercício 3

type user = {
	id: string;
	name: string;
	email: string;
}

// const getAllSubscribers = async ():Promise<user[]> => {
//     const result = await axios.get(`${baseUrl}/subscribers`)
//     return result.data
// }

// getAllSubscribers().then(console.log)

//a) Resposta:  Não teremos erro de tipagem, mas ao usar essa tipagem o retorno pode não ser o esperado.

//b) Resposta: Sim, o mapeamento do resultado nos garante que esse virá de acordo com o que esperamos.

//c) Resposta:

const getAllSubscribers = async (): Promise<user[]> => {
    const result = await axios.get(`${baseUrl}/subscribers`);
    return result.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      }
    })
}
getAllSubscribers().then(console.log)
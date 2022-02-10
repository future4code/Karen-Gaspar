import { baseUrl } from "./baseUrl"
import axios from 'axios'

// Exercício 6

// a) Resposta: O Promise all resolve o problema do código esperar uma requisição ser 
// respondida antes de enviar outra.

// b) Resposta: A vantagen é que a requisição de enviar a notificação por id funcionará 
// como uma lista de ids trabalhando paralelamente e fazendo com que as notificações cheguem mais rápido.

// c) Resposta:

const notifyAllSubscribers = async (ids: string[]): Promise<void> => {

    try {
        const requests = ids.map(id => axios.post(`${baseUrl}/notifications`, {
            subscriberId: id,
            message: "Confira as últimas notícias do dia"
        }))

        await Promise.all(requests)
        console.log(`Notificação enviadas`)

    } catch (error) {
        console.log(`Erro ao notificar assinantes`)
    }
}





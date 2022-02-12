import { baseUrl } from "./baseUrl"
import axios from 'axios'

// Exercício 5

const notifyAllSubscribers = async (ids: string[]): Promise<void> => {

    for (let id of ids) {
        try {
            await axios.post(`${baseUrl}/notifications`, {
                subscriberId: id,
                message: "Confira as últimas notícias do dia"
            })
            console.log(`Notificação enviada para ${id}`)

        } catch (error) {
            console.log(`Erro ao notificar ${id}`)
        }
    }
}

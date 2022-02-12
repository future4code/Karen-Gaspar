import axios from 'axios'
import { Address } from "../types/Address"

const baseUrl = "https://viacep.com.br/ws"

export const getAddress = async (cep: string): Promise<Address | null> => {
    try {
        const response = await axios.get(`${baseUrl}/${cep}/json`)

        const address: Address = {
            street: response.data.logradouro,
            neightborhood: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf
        }
        return address

    } catch (error) {
        console.log("Erro no serviço getAddress:", error)
        return null
    }
}
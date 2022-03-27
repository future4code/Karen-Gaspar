import axios from 'axios'
import { BASE_URL } from '../constants/base_url'
import { API_KEY } from '../constants/api_key'


export const getMovie = (setMovie) => {
    axios.get(`${BASE_URL}popular?${API_KEY}&language=pt-BR`)
        .then((res) => {
            setMovie(res.data.results)
        })
        .catch((err) => {
            console.log(err.message)
        })
}

import axios from 'axios'
import {BASE_URL} from '../constants/base_url'
import {API_KEY} from '../constants/api_key'

export const getMovieDetails = (id, setMovie, setIsLoading)=>{
    setIsLoading(true)
    axios.get(`${BASE_URL}${id}?${API_KEY}&language=pt-BR`)
    .then((res)=> {
        setMovie(res.data)
        setIsLoading(false)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

export const getMovie = (setMovie) => {
    axios.get(`${BASE_URL}popular?${API_KEY}&language=pt-BR`)
    .then((res)=>{
        setMovie(res.data.results)
    })
    .catch((err)=> {    
        console.log(err.message) 
    })
}
 
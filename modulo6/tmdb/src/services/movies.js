import axios from 'axios'
import {BASE_URL} from '../constants/base_url'
import {API_KEY} from '../constants/api_key'

export const getMovieDetails = (id, setMovie, getCategories, setCategories, setIsLoading)=>{
    setIsLoading(true)
    axios.get(`${BASE_URL}${id}`)
    .then((res)=> {
        setMovie(res.data.movie)
        setCategories(getCategories(res.data.movie))
        setIsLoading(false)
    })
    .catch((err)=>{
        setIsLoading(false)
    })
}

export const getMovie = (setMovie) => {
    axios.get(`${BASE_URL}popular`)
    .then((res)=>{
        setMovie(res.data.movie)
    })
    .catch((error)=> {     
    })
}
 
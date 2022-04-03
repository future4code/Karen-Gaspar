import axios from 'axios'
import { BASE_GENRE_URL, BASE_URL } from '../constants/base_url'
import { API_KEY } from '../constants/api_key'


export const getMovie = (setMovie) => {
    axios.get(`${BASE_URL}popular?${API_KEY}&language=pt-BR`)
        .then((res) => {
            setMovie(res.data.results)
            console.log(res.data.results)
        })
        .catch((err) => {
            console.log(err.message)
        })
}

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

export const getMovieGenres = (setGenre)=>{
    axios.get(`${BASE_GENRE_URL}list?${API_KEY}&language=pt-BR`)
    .then((res)=> {
        console.log(res.data.genres)
        setGenre(res.data.genres)
        
    })
    .catch((err)=>{
        console.log(err.message)
    })
}
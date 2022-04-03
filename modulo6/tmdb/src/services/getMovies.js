import axios from 'axios'
import { BASE_GENRE_URL, BASE_URL } from '../constants/base_url'
import { API_KEY } from '../constants/api_key'


export const getMovies = (setMovies) => {
    axios.get(`${BASE_URL}popular?${API_KEY}&language=pt-BR`)
        .then((res) => {
            setMovies(res.data.results)
        })
        .catch((err) => {
            console.log(err.message)
        })
}


export const getMovieGenres = (setGenre)=>{
    axios.get(`${BASE_GENRE_URL}list?${API_KEY}&language=pt-BR`)
    .then((res)=> {
        // console.log(res.data.genres)
        setGenre(res.data.genres)
        
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

export const getMovieDetails = (id, setMovie)=>{
    axios.get(`${BASE_URL}${id}?${API_KEY}&language=pt-BR`)
    .then((res)=> {
        setMovie(res.data)
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}
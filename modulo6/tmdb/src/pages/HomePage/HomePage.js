import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import MovieCard from '../../components/MovieCard/MovieCard'
import MovieCategories from '../../components/Categories/MovieCategories'
import { MainContainer } from './styled'
import { useNavigate } from 'react-router-dom'
import {getMovie} from '../../services/movies'
import { goToMovieDetails } from '../../routes/coordinator'

function HomePage() {
  
  const [movie, setMovie] = useState([])
  const history = useNavigate()

  useEffect(() => {
    getMovie(setMovie)
  }, [])

  const onClickCard = (id) => {
    goToMovieDetails(history, id)
  }

  const handleCategory = (value) => {

  }


  return (
    <div>
      <Header/>
      <MovieCategories/>
      <MovieCard/>
    </div>
  );
}

export default HomePage;
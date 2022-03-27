import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import MovieCard from '../../components/MovieCard/MovieCard'
import { CardContainer, MainContainer } from './styled'
import { getMovie } from '../../services/getMovies'
import MovieGenre from '../../components/Genres/MovieGenre'

function HomePage() {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    getMovie(setMovie)
  }, [])

  const movieList = movie && movie
    .map((movie) => {
      return <MovieCard
        key={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        release_date={movie.release_date}
      />
    })

  return (
    <MainContainer>
      <Header />
      <MovieGenre />
      <CardContainer>
        {movieList}
      </CardContainer>
    </MainContainer>
  );
}

export default HomePage;
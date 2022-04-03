import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import MovieCard from '../../components/MovieCard/MovieCard'
import { ButtonsContainer, CardContainer, DescriptionContainer, GenreContainer, MainContainer } from './styled'
import { getMovie, getMovieGenres } from '../../services/getMovies'
import MovieGenre from '../../components/Genres/MovieGenre'

function HomePage() {

  const [movie, setMovie] = useState([])
  const [genre, setGenre] = useState([])

  useEffect(() => {
    getMovie(setMovie)
  }, [])

  useEffect(() => {
    getMovieGenres(setGenre)
  }, [])

  const genreList = genre && genre
    .map((genre) => {
      return <MovieGenre
        key={genre.id}
        id={genre.id}
        name={genre.name}
      />
    })

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
      <GenreContainer>
        <DescriptionContainer>
          <h3>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h3>
          <p>FILTRE POR:</p>
        </DescriptionContainer>
        <ButtonsContainer>
          {genreList}
        </ButtonsContainer>
      </GenreContainer>
      <CardContainer>
        {movieList}
      </CardContainer>
    </MainContainer>
  );
}

export default HomePage;
import React from 'react'
import { ImageContainer, MovieCardContainer, MovieTitleContainer } from './styled';

function MovieCard(props) {

  const { poster_path, title, release_date } = props
  
  return (
    <MovieCardContainer>
      <ImageContainer src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
      <MovieTitleContainer>
        <div>
          {title.toUpperCase()}
        </div>
        <div>
          {release_date.split('-').reverse().join('-')}
        </div>
      </MovieTitleContainer>
    </MovieCardContainer>
  );
}

export default MovieCard;



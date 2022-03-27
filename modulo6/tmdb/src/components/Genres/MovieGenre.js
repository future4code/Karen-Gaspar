import React from 'react'
import { Button, ButtonsContainer, GenreContainer, DescriptionContainer } from './styled';

function MovieGenre() {
    return (
        <GenreContainer>
            <DescriptionContainer>
                <h3>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h3>
            </DescriptionContainer>
            <ButtonsContainer>
                <p>FILTRE POR:</p>
                <Button>Ação</Button>
                <Button>Aventura</Button>
                <Button>Animação</Button>
                <Button>Comédia</Button>
                <Button>Crime</Button>
                <Button>Documenário</Button>
                <Button>Drama</Button>
                <Button>Família</Button>
                <Button>Fantasia</Button>
                <Button>História</Button>
                <Button>Terror</Button>
                <Button>Música</Button>
                <Button>Mistério</Button>
                <Button>Romance</Button>
                <Button>Ficção Científica</Button>
                <Button>Cinema TV</Button>
                <Button>Thriller</Button>
                <Button>Guerra</Button>
                <Button>Faroeste</Button>
            </ButtonsContainer>
        </GenreContainer>
    );
}

export default MovieGenre;
import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    margin-bottom: 10px;
    height: 80px;
    
    img{
        width: 25px;
        margin-left: 10px;
    }
    h4 {
        margin: 10px;
    }
    div{
        display: flex;
        align-items: center;
        margin: 10px;
        width: 440px;
    }
`

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.texto }</h4>
                <p>{ props.descricao }</p>
            </div>
        </SmallCardContainer>
    )
}

export default CardPequeno;
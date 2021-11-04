import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post1 from './components/Post1/Post1';
import Post2 from './components/Post2/Post2';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post1
          nomeUsuario={'elizabete'}
          fotoUsuario={'https://picsum.photos/60/60'}
          fotoPost={'https://picsum.photos/400/350'}
        />
        <Post2
          nomeUsuario={'raul'}
          fotoUsuario={'https://picsum.photos/70/70'}
          fotoPost={'https://picsum.photos/300/250'}
        />
      </MainContainer>
    );
  }
}

export default App;

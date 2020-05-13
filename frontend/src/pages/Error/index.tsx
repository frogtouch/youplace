import React from 'react';

//Style
import { Container } from './styles';

//Images
import errorImage from '../../assets/home-image/404error.jpg';

const Error: React.FC = () => {
  return (
    <Container>
      <img src={errorImage} alt="error-image" />
      <button type="button">Voltar para Home</button>
    </Container>
  )
}

export default Error;

import React from 'react';
import { Container } from './styles';

import { FaWarehouse } from 'react-icons/fa';
import { GrAnnounce } from 'react-icons/gr'

const Header: React.FC = () => {
  return (
    <Container>
      <div><FaWarehouse size={30} color="#000"/></div>
      <h1>Seu Imóvel</h1>

      <h3>Entrar ou Cadastrar</h3>
      <h3>Central de ajuda</h3> 
      <h3>Anunciar Imóveis</h3>
    
    </Container>
  );
}

export default Header;
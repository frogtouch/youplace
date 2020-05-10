import React from 'react';

import { Container, Select } from './styles';

const FindHomes: React.FC = () => {
  return (
      <Container>  
        <div>
          <h3>O que você deseja ?</h3>
          <button type="button">Alugar</button>
          <button type="button">Comprar</button>
          <button type="button">Lançamentos</button>
        </div>
        <div>
          <h3>Qual tipo ?</h3>
          <label htmlFor="tipo"></label>
          <Select id="tipo">
            <option value="imoveis">Todos os imóveis</option>
            <option value="">Apartamento</option>
            <option value="">Estudio</option>
            <option value="">Kitnet</option>
            <option value="">Casa</option>
            <option value="">Casa de condominio</option>
          </Select>
        </div>
        <div>
          <h3>Onde ?</h3>
          <input type="text" placeholder="Adicionar uma rua, bairro ou cidade"/>
          <button type="button">Buscar</button>
        </div>
      </Container>
  );
}

export default FindHomes;
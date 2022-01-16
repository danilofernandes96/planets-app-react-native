import React from 'react';
import {LineBlue} from '../../global/styles';
import {Container, Details, Image, Title} from './style';

const PlanetDetails: React.FC = () => {
  return (
    <Image>
      <Container></Container>
      <Details>
        <Title>SOBRE</Title>
        <LineBlue />
      </Details>
    </Image>
  );
};

export default PlanetDetails;

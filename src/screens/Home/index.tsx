import React from 'react';
import Card from '../../components/Card';
import {Container, Image} from './styles';

const Home: React.FC = () => {
  return (
    <Image>
      <Container>
        <Card />
      </Container>
    </Image>
  );
};

export default Home;

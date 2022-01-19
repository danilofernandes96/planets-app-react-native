import React, {useEffect, useState} from 'react';
import {LineBlue} from '../../global/styles';
import {Container, Details, Image, ImagePlanet, TextBox, Title} from './style';
import {IPlanet} from '../../store/modules/PlanetStore/Types';
import {IRootStore} from '../../store';
import {useSelector} from 'react-redux';
import api from '../../services/api';

const PlanetDetails: React.FC = () => {
  const [data, setData] = useState<IPlanet>();
  const id = useSelector((state: IRootStore) => state.GlobalIPlanet.id);

  useEffect(() => {
    api
      .get<IPlanet>(`/planet/${id}`)
      .then(response => setData(response.data))
      .catch(e => console.log(e));
  }, [id]);

  const image: any = data?.image;

  return (
    <Image>
      <Container>
        <ImagePlanet uri={image} />
      </Container>
      <Details>
        <Title>CURIOSIDADES</Title>
        <LineBlue />
        <TextBox>{data?.curiosity}</TextBox>
      </Details>
    </Image>
  );
};

export default PlanetDetails;

import React, {useEffect, useState} from 'react';
import {LineBlue} from '../../global/styles';
import {
  Container,
  Details,
  Image,
  ImagePlanet,
  LottiePlanet,
  SubTitle,
  TextRegular,
  Title,
  ViewPlanetLoad,
} from './style';
import {IPlanet} from '../../store/modules/PlanetStore/Types';
import {IRootStore} from '../../store';
import {useSelector} from 'react-redux';
import api from '../../services/api';

const PlanetDetails: React.FC = () => {
  const [data, setData] = useState<IPlanet>();
  const id = useSelector((state: IRootStore) => state.GlobalIPlanet.id);
  const [isLoad, setIsload] = useState(false);

  useEffect(() => {
    setIsload(true);
    api
      .get<IPlanet>(`/planet/${id}`)
      .then(response => setData(response.data))
      .catch(e => console.log(e))
      .finally(() => {
        setTimeout(() => {
          setIsload(false);
        }, 3000);
      });
  }, [id]);

  if (isLoad) {
    return (
      <ViewPlanetLoad>
        <LottiePlanet
          source={require('../../Animations/planet_animation.json')}
          autoPlay
          loop
          speed={2.3}
        />
      </ViewPlanetLoad>
    );
  }

  const image: any = data?.image;

  return (
    <Image>
      <Container>
        <ImagePlanet uri={image} />
      </Container>
      <Details>
        <Title>CURIOSIDADES</Title>
        <LineBlue />
        <TextRegular>{data?.curiosity}</TextRegular>
        <SubTitle>Distância do Sol:</SubTitle>
        <LineBlue />
        <TextRegular>{data?.distance_sun}</TextRegular>
        <SubTitle>Duração do dia:</SubTitle>
        <LineBlue />
        <TextRegular>{data?.duration_day}</TextRegular>
        <SubTitle>Período orbital:</SubTitle>
        <LineBlue />
        <TextRegular>{data?.orbital_period}</TextRegular>
      </Details>
    </Image>
  );
};

export default PlanetDetails;

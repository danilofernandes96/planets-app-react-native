import React from 'react';
import {
  CardView,
  CenteredView,
  ImageCard,
  InfoText,
  InfoView,
  TitleText,
  ViewText,
} from './styles';
import {IPlanet} from './types';

const Card: React.FC<IPlanet> = ({name, image, temperature, size}) => {
  return (
    <CenteredView>
      <CardView>
        <ImageCard uri={image} />
        <ViewText>
          <TitleText>{name}</TitleText>
          <InfoView>
            <InfoText>{temperature}</InfoText>
            <InfoText>{size}</InfoText>
          </InfoView>
        </ViewText>
      </CardView>
    </CenteredView>
  );
};

export default Card;

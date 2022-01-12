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
import {ICard} from './types';

const Card: React.FC<ICard> = ({
  imagePlanet,
  titlePlanet,
  temperature,
  size,
}) => {
  return (
    <CenteredView>
      <CardView>
        <ImageCard uri={imagePlanet} />
        <ViewText>
          <TitleText>{titlePlanet}</TitleText>
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

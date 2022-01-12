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

const Card: React.FC = () => {
  return (
    <CenteredView>
      <CardView>
        <ImageCard />
        <ViewText>
          <TitleText>Marte</TitleText>
          <InfoView>
            <InfoText>°C: 450</InfoText>
            <InfoText>450</InfoText>
          </InfoView>
        </ViewText>
      </CardView>
    </CenteredView>
  );
};

export default Card;

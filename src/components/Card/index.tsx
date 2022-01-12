import React from 'react';
import {CardView, CenteredView, ImageCard, ViewText} from './styles';

const Card: React.FC = () => {
  return (
    <CenteredView>
      <CardView>
        <ImageCard />
        <ViewText />
      </CardView>
    </CenteredView>
  );
};

export default Card;

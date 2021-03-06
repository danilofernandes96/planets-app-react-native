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
import {IPlanet} from '../../store/modules/PlanetStore/Types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faRulerCombined,
  faTemperatureHigh,
} from '@fortawesome/free-solid-svg-icons';
import {LineBlue} from '../../global/styles';

const Card: React.FC<IPlanet> = ({name, image, temperature, size}) => {
  return (
    <CenteredView>
      <CardView>
        <ImageCard uri={image} />
        <ViewText>
          <TitleText>{name}</TitleText>
          <LineBlue />
          <InfoView>
            <InfoText>
              <FontAwesomeIcon
                icon={faTemperatureHigh}
                size={16}
                color="#FFF"
              />
              {temperature}
            </InfoText>
            <InfoText>
              <FontAwesomeIcon icon={faRulerCombined} size={16} color="#FFF" />
              {size}
            </InfoText>
          </InfoView>
        </ViewText>
      </CardView>
    </CenteredView>
  );
};

export default Card;

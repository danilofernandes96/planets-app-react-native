import { Image } from 'react-native';
import styled from 'styled-components/native';

export const CenteredView = styled.View`
  flex-grow: 1;
  align-items: center;
  margin: 10px;
`;

export const CardView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: #434273;
  border-radius: 15px;
  padding: 15px;
  width: auto;
  min-height: 150px;
`;

export const ImageCard = styled(Image).attrs({
  source: require('../../../assets/images/universe-background.png'),
})`
  width: 40%;
  height: 100%;
  object-fit: contain;
  margin-right: 15px;
`;

export const ViewText = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #FFF;
  text-align: center;
`;

export const InfoView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: #FFF;
`;

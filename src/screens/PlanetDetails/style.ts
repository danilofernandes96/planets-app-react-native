import { ImageBackground } from 'react-native';
import { SvgUri } from 'react-native-svg';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const Container = styled.SafeAreaView`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(ImageBackground).attrs({
  resizeMode: 'cover',
  source: require('../../../assets/images/universe-background.png'),
})`
  flex-grow: 1;
  justify-content: center;
`;

export const Details = styled.View`
  flex: 1.8;
  background-color: #434071;
  padding: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 30px;
  color: #FFF;
`;

export const TextBox = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: #FFF;
  margin-top: 10px;
  text-align: justify;
`;

export const ImagePlanet = styled(SvgUri).attrs({
  width: '50%',
  height: '100%',
})`
  flex: 1;
`;

export const ViewPlanetLoad = styled.View`
  flex: 0.8;
  align-items: center;
  justify-content: center;
`;

export const LottiePlanet = styled(LottieView).attrs({
  lottie_speed: '2.5'
})`
  height: 350px;
  width: 350px;
`;

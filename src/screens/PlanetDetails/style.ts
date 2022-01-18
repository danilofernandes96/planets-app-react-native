import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

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
  flex: 0.5;
  background-color: #434071;
  padding: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #FFF;
`;

export const TextBox = styled.Text`
  font-size: 16px;
  color: #FFF;
  margin-top: 10px;
  text-align: justify;
`;

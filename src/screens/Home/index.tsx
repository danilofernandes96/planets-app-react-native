import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from '../../components/Card';
import {IPlanet} from '../../store/modules/PlanetStore/Types';
import api from '../../services/api';
import {Container, Image, TouchablePlanet} from './styles';

const Home: React.FC = () => {
  const nav = useNavigation();
  const [planet, setPlanet] = useState<IPlanet[]>([]);

  useEffect(() => {
    api
      .get('/planets')
      .then(response => {
        setPlanet(response.data);
      })
      .catch(e => console.log(e));
  }, []);

  const handle = (screen: any) => {
    nav.navigate(screen);
  };

  return (
    <Image source={require('../../../assets/images/universe-background.png')}>
      <Container>
        <FlatList
          style={styles.flatlistContainer}
          data={planet}
          renderItem={({item}) => (
            <TouchablePlanet onPress={() => handle('Details')}>
              <Card
                id={item.id}
                name={item.name}
                image={item.image}
                size={item.size}
                temperature={item.temperature}
                curiosity={item.curiosity}
              />
            </TouchablePlanet>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </Image>
  );
};

const styles = StyleSheet.create({
  flatlistContainer: {
    width: '100%',
  },
});

export default Home;

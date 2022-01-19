import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Card from '../../components/Card';
import {IPlanet, IPlanetId} from '../../store/modules/PlanetStore/Types';
import api from '../../services/api';
import {Container, Image, TouchablePlanet} from './styles';
import {useDispatch} from 'react-redux';
import {IdPlanet} from '../../store/modules/PlanetStore/Actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();
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

  const handle = (screen: any, val: string, valName: string) => {
    const newId: IPlanetId = {
      id: val,
      name: valName,
    };
    dispatch(IdPlanet(newId));
    nav.navigate(screen);
  };

  return (
    <Image source={require('../../../assets/images/universe-background.png')}>
      <Container>
        <FlatList
          style={styles.flatlistContainer}
          data={planet}
          renderItem={({item}) => (
            <TouchablePlanet
              onPress={() => handle('Details', item.id, item.name)}>
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

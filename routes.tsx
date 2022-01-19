import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Home from './src/screens/Home';
import PlanetDetails from './src/screens/PlanetDetails';
import {IRootStore} from './src/store';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 255, 255)',
    card: '#434071',
    background: '#434071',
    text: '#FFF',
  },
};

const Routes: React.FC = () => {
  const planetName = useSelector(
    (state: IRootStore) => state.GlobalIPlanet.name,
  );
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={PlanetDetails}
          options={{title: planetName}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

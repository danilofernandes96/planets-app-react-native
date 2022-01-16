import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import PlanetDetails from './src/screens/PlanetDetails';

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    card: 'rgba(35, 11, 87, 0.8)',
    background: 'rgba(35, 11, 87, 0.8)',
    text: '#FFF',
  },
};

const App: React.FC = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Início'}}
        />
        <Stack.Screen
          name="Details"
          component={PlanetDetails}
          options={{title: 'Planeta'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

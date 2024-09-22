import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/HomeScreen';
import AboutScr from './pages/AboutScreen';
import ListScr from './pages/ListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeSCR" component={HomeScreen} />
        <Stack.Screen name="AboutSCR" component={AboutScr} />
        <Stack.Screen name="ListSCR" component={ListScr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

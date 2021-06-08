import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {CityList, RestaurantList, RestaurantDetail} from './pages'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cities" component={CityList} />
        <Stack.Screen name="Restaurants" component={RestaurantList} />
        <Stack.Screen name="Details" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
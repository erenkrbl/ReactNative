// In App.js in a new project

import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const First = () =>{
  return (
    <SafeAreaView>
      <View>
        <Text>First</Text>
      </View>
    </SafeAreaView>
  )
}

const Second = () =>{
  return (
    <SafeAreaView>
      <View>
        <Text>Second</Text>
      </View>
    </SafeAreaView>
  )
}

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='First Page' component={First} />
        <Tab.Screen name='Second Page' component={Second} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
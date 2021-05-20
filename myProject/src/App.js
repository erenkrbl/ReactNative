import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent';

const App = () => {
  return (
    <View >
      <View style={styles.container}>
        <Text style = {styles.text}>
          Hello React native
        </Text>
      </View>
      <MyComponent/>
    </View>
  )
};

const styles = StyleSheet.create({
   container: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
    borderRadius: 20,
   },
   text : {
     color: 'black',
     fontSize: 35,
     fontWeight: 'bold',
     textAlign: 'center'
   }
 })
export default App;

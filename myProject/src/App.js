import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>
        Hello React native
      </Text>
    </View>
  )
};

 const styles = StyleSheet.create({
   container: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20
   }
 })
export default App;

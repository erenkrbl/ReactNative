
import React from 'react';
import { 
  SafeAreaView, 
  View, 
  StyleSheet, 
  Text, 
} from 'react-native';



const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={[styles.text, {color: 'rgb(170, 71, 126)'}]}>Clarusway</Text>
        <Text style={styles.text}>Components</Text> 
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});

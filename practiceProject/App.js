
import React from 'react';
import { SafeAreaView, View, StyleSheet} from 'react-native';



const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={{width:40, height:40, backgroundColor:'red'}} />
        <View style={{width:40, height:40, backgroundColor:'blue'}} />
        <View style={{width:40, height:40, backgroundColor:'green'}} />
      </View>
      <View style={{flex:1, backgroundColor: 'gray'}}/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#e0e0e0',
    justifyContent: 'space-around', //'space-between', 'space-evenly', 'flex-start',
    alignItems: 'center', // alignItems: 'flex-start', 'flex-end','baseline',
  },
});

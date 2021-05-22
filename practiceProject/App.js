
import React from 'react';
import { 
  SafeAreaView, 
  View, 
  StyleSheet, 
  Text, 
  TextInput,
  Platform
} from 'react-native';



const App = () => {
  function sayHello(){
    const platform = Platform.OS;
    const version = Platform.Version;
  
    if (platform === 'ios')
      return (
        <Text>Hello to İphone {version}</Text>
      );
    else
      return (
        <Text>Hello to Anroid {version}</Text>
      );
  }
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="email-address" 
            placeholder="Search" 
          />
        </View>
        {/* <Text style={{fontSize: 40}}>Cihaz: {platform}</Text> */}
        {sayHello()}
      </View>
      {/* <View style={{flex:1, backgroundColor: 'gray'}}/> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#e0e0e0',
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 5,
    margin:5,
    borderColor: 'gray',
    borderWidth:1,
    borderRadius:10,
  },
});

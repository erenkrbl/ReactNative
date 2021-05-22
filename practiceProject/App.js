
import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput} from 'react-native';



const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="email-address" 
            placeholder="Search" 
          />
        </View>
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

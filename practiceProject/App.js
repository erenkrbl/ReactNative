
import React from 'react';
import { SafeAreaView, Text, View} from 'react-native';



const App = () => {
  return (
    <SafeAreaView style={{backgroundColor:'green', flex:1}}>
      <View style ={{backgroundColor:'red', flex:1}}>
        <Text>Wellcome</Text>
      </View>
      <View style={{backgroundColor:'blue', flex:1}}>
        <Text>Hello New Project</Text>
      </View>
      <View style={{backgroundColor:'yellow', flex:1}}>
        <Text>Hello New Project</Text>
        <Text>Hello New Project</Text>
        <Text>Hello New Project</Text>
        <Text>Hello New Project</Text>
        <Text>Hello New Project</Text>
        <Text>Hello New Project</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

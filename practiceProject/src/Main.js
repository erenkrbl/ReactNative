
import React from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import MyBanner from './components/MyBanner';



const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <View>
        <Text>Hello React Native</Text>
        <MyBanner />
      </View>
    </SafeAreaView>
  );
};

export default App;



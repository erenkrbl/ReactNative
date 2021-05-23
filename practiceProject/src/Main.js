
import React from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import MyBanner from './components/MyBanner';



const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <View>
        <MyBanner 
          title= "Soups"
          desc= "Delicious dishes"
        />
         <MyBanner 
          title= "Main Courses"
          desc= "Hearty flavors"
        />
         <MyBanner 
          title= "İntermediate meals"
          desc= "Delicious apparatus"
        />
        
         <MyBanner 
          title= "Salads"
          desc= "Refresh salads"
        />

      </View>
    </SafeAreaView>
  );
};

export default App;



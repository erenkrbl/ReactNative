
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
          color= "#ef5350"
        />
         <MyBanner 
          title= "Main Courses"
          desc= "Hearty flavors"
          color= "#ffa000"
        />
         <MyBanner 
          title= "İntermediate meals"
          desc= "Delicious apparatus"
          color= "#64b5f6"
        />
        
         <MyBanner 
          title= "Salads"
          desc= "Refresh salads"
          color= "#4caf50"
        />

      </View>
    </SafeAreaView>
  );
};

export default App;



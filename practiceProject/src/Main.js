
import React from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import MyBanner from './components/MyBanner';



const App = () => {

  const food_data = [
    {
      id:0,
      title: "Soups",
      color: "#ef5350",
      desc: "Delicious dishes",
      isActive:false
    },
    {
      id:1,
      title: "Main Courses",
      color: "#ffa000",
      desc: "Hearty flavors",
      isActive:false
    },
    {
      id:2,
      title: "İntermediate meals",
      color: "#64b5f6",
      desc: "Delicious apparatus",
      isActive:true
    },
    {
      id:3,
      title: "Salads",
      color: "#4caf50",
      desc: "Refresh salads",
      isActive:false
    },
    {
      id:4,
      title: "Drinks",
      color: "#ffee58",
      desc: "Cold & Hot Drinks",
      isActive:false
    },


  ]

  return (
    <SafeAreaView style={{flex:1}}>
      <View>
        <MyBanner 
          title= "Soups"
          desc= "Delicious dishes"
          color= "#ef5350"
          isActive={false}
        />
         <MyBanner 
          title= "Main Courses"
          desc= "Hearty flavors"
          color= "#ffa000"
          isActive={true}
        />
         <MyBanner 
          title= "İntermediate meals"
          desc= "Delicious apparatus"
          color= "#64b5f6"
          isActive={true}
        />
        
         <MyBanner 
          title= "Salads"
          desc= "Refresh salads"
          color= "#4caf50"
          isActive={true}
        />

      </View>
    </SafeAreaView>
  );
};

export default App;



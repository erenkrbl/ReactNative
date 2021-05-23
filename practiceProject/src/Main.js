
import React from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import MyBanner from './components/MyBanner';

const food_data = [
  {
    id:0,
    title: "Soups",
    color: "#ef5350",
    desc: "Delicious dishes",
    isActive:true,
  },
  {
    id:1,
    title: "Main Courses",
    color: "#ffa000",
    desc: "Hearty flavors",
    isActive:false,
  },
  {
    id:2,
    title: "İntermediate meals",
    color: "#64b5f6",
    desc: "Delicious apparatus",
    isActive:true,
  },
  {
    id:3,
    title: "Salads",
    color: "#4caf50",
    desc: "Refresh salads",
    isActive:false,
  },
  {
    id:4,
    title: "Drinks",
    color: "#ffee58",
    desc: "Cold & Hot Drinks",
    isActive:true,
  },
];

const App = () => {

  return (
    <SafeAreaView style={{flex:1}}>
      <View>
        {food_data.map((food) => {
          return (
            <MyBanner
              title= {food.title}
              desc= {food.desc}
              color= {food.color}
              isActive= {food.isActive} 
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default App;



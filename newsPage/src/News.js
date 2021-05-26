import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native';

const myArray = Array.from(Array(1500).keys())

const News = () => {

    const renderData = (data) => <Text style={{fontSize: 30}}>{data.item}</Text>
  return (
    <SafeAreaView style={{flex: 1}}>
        {/* <ScrollView style={{flex: 1}}>
            <View>
                {
                    myArray.map(u =><Text>{u}</Text>)
                }
                <Text>News Page</Text>
            </View>
        </ScrollView> */}

        <FlatList 
            data= {myArray}
            renderItem= {renderData}
        />
      
    </SafeAreaView>
  );
};


export default News;
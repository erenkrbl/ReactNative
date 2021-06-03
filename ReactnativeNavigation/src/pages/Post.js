import React from 'react';
import { SafeAreaView, Text, View, Image, Dimensions  } from 'react-native';

const Post = (props) =>{

  

    return (
      <SafeAreaView>
        <View>
          <Text style={{fontSize:40}}>username</Text>
          <Image/>
          <Text style={{fontSize:40}}>desc</Text>
  
        </View>
      </SafeAreaView>
    )
  }

  export { Post };

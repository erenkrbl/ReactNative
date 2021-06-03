import React from 'react';
import { SafeAreaView, Text, View, Button  } from 'react-native';

const Post = (props) =>{
    return (
      <SafeAreaView>
        <View>
          <Text style={{fontSize:40}}>Post</Text>
          <Button 
            title='Back'
            onPress={() => props.navigation.goBack('Main')}
          />
        </View>
      </SafeAreaView>
    )
  }

  export { Post };

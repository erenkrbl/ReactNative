import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MyComponent = () => {
    return (
        <View style = {styles.container}>
            <Text style={{fontSize:20}}>Hello</Text>
            <Text>welcome to Clarusway</Text>
            <View>
                <Text>Our FullStack Developer</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'green',
        padding: 10,
        margin: 20,
        //borderColor: 'black',
        borderRadius: 20
    }  
});

export default MyComponent;

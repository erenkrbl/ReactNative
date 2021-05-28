import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Button, Dimensions } from 'react-native';

const App = (props) => {
   
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
               <View style={styles.input}>
                   <TextInput 
                        placeholder = "Enter your e-mail..."
                   />
               </View>
               <View style={styles.input}>
                   <TextInput 
                        placeholder = "Enter your password..."
                   />
               </View>
               <Button 
                    title= "Login"
               />
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    input: {
        backgroundColor : '#e3f2fd',
        padding: 5,
        margin: 5,
        borderRadius: 5,
        width: Dimensions.get('window').width * 0.85
    }
})
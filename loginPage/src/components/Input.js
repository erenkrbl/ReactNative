import React from "react";
import {View, Text, TextInput, StyleSheet, Platform} from "react-native";

const Input = ({holder}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder = {holder}
            />
        </View>
       
    )
}

export  { Input };

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#eceff1',
        padding: Platform.OS == "ios" ? 15 : 5,
        margin:10,
        borderRadius:10,
        marginVertical: 20,
    }
})
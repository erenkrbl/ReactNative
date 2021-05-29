import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet  } from "react-native";

const MyButton = () => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <Text>Press Me!</Text>
        </TouchableOpacity>
    )          
}

export default MyButton;

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor: '#a5d6a7',
        padding: 15,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
    }
})
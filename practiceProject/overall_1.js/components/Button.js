import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet  } from "react-native";

const Button = (props) => {
  
    return (
        <TouchableOpacity style={
            [
                styles.buttonContainer, 
                {
                    backgroundColor: props.color === undefined ? "#a5d6a7": props.color  
                }
            ]}
            onPress={props.sayingHello}
            >
            <Text style={styles.textStyle}>{props.title}</Text>
        </TouchableOpacity>
    )          
}

export default Button;

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor: '#a5d6a7',
        padding: 15,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    textStyle : {
        fontSize: 20
    }
})
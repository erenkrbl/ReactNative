import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet  } from "react-native";

const Button = (props) => {
    // let selectedColor = props.color;

    // if(props.color === undefined){
    //     selectedColor = "#a5d6a7"
    // }

    return (
        <TouchableOpacity style={
            [
                styles.buttonContainer, 
                {
                    backgroundColor: props.color === undefined ? "#a5d6a7": props.color  
                }
            ]}>
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
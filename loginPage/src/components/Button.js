import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions} from "react-native";

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
       
    )
}

export { Button };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#82ada9',
        padding: 20,
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        borderRadius: 10
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})
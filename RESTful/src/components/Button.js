import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.onNewRequest()}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export { Button };

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#d7ccc8',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, StyleSheet} from "react-native";


const InputPanel = (props) => {

    const [inputText, setInputText] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={value => setInputText(value)} 
                    placeholder="Search..."
                />

            </View>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={() => props.sendText(inputText)}
            >
                <Text style={{textAlign: "center"}}>Choose</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputPanel;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#cfd8dc',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    inputContainer: {
        backgroundColor: '#e1f5fe',
        padding: 5,
        margin: 10,
        borderRadius: 10
        
    },
    buttonContainer: {
        backgroundColor: '#80deea',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    }
})
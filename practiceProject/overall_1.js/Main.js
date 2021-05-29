import React from "react";
import { SafeAreaView, View, Text,TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello World </Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text>Press Me!</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor: '#a5d6a7',
        padding: 15,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'


    }
})
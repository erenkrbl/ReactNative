import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Alert } from "react-native";
import Button from "./components/Button";

const App = () => {

    const sayHello = () => {
        alert("Hello")
    }
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello World </Text>
            </View>
            <Button 
                title="Press Me!"
                color="#4dd0e1"
                sayingHello= {sayHello}
            />
            <Button 
                title="Press Fullstack!"
                color="#4dd0e1"
                sayingHello= {() => {
                    Alert.alert("Clarusway", "Full Stack forever")
                }}
            />
        </SafeAreaView>
    )
}

export default App;

import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Alert } from "react-native";
// import Button from "./components/Button";
import InputPanel from "./components/InputPanel";

const App = () => {

    const sayHello = () => {
        alert("Hello")
    }
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello World </Text>
            </View>
            <InputPanel />
            {/* <Button 
                title="Press Me!"
                color="#4dd0e1"
                sayingHello= {sayHello}
            />          */}
        </SafeAreaView>
    )
}

export default App;

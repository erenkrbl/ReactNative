import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Button from "./components/Button";

const App = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello World </Text>
            </View>
            <Button 
                title="Press Me"
            />
            <Button 
                title="Press Me too"
            />
            <Button 
                title="Dont press Me"
                color="#4dd0e1"
            />
        </SafeAreaView>
    )
}

export default App;

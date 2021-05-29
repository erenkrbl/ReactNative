import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import MyButton from "./components/Button";

const App = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 50 }}>Hello World </Text>
            </View>
            <MyButton />
        </SafeAreaView>
    )
}

export default App;

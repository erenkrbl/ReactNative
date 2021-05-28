import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Button, Dimensions, Alert } from 'react-native';

const App = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        Alert.alert("Clarusway", `Email: ${email}, Password: ${password}`)
    }
   
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
               <View style={styles.input}>
                   <TextInput
                        value = {email} 
                        placeholder = "Enter your e-mail..."
                        onChangeText = {(userText) => setEmail(userText)}
                        keyboardType = "email-address"
                   />
               </View>
               <View style={styles.input}>
                   <TextInput
                        value = {password} 
                        placeholder = "Enter your password..."
                        onChangeText = {(userPass) => setPassword(userPass)}
                        secureTextEntry = {true}

                   />
               </View>
               <Button 
                    title= "Login"
                    onPress = {login}
               />
               <Button 
                    title= "Clean"
                    onPress = {() => {
                        setEmail("");
                        setPassword("");
                    }}
               />
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    input: {
        backgroundColor : '#e3f2fd',
        padding: 5,
        margin: 5,
        borderRadius: 5,
        width: Dimensions.get('window').width * 0.85
    }
})
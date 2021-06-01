import React, { useState } from 'react';
import {SafeAreaView, View, Text, Button, TextInput} from 'react-native';

const number = 55;

const First = (props) => {

    const [userName, setUserName] = useState("");
    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize: 40}}>First Page</Text>
                {/* <Text style={{fontSize: 40}}>{number}</Text> */}
                <Text style={{fontSize: 40}}>{userName}</Text>
                <View style={{backgroundColor: '#e0e0e0', padding: 5, margin: 5, borderRadius:5}}>
                    <TextInput
                        value={userName}
                        onChangeText={(text) => setUserName(text)}
                        // onChangeText={(userName) => setUserName(userName)}
                    />
                </View>
                <Button 
                    title= "Go"
                    onPress= {() => props.navigation.navigate('SecondPage', {
                        // myNumber : number
                        selectedValue : userName
                    })}
                />
            </View>
        </SafeAreaView>
    )
}

export default First;
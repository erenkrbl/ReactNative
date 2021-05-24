import React from "react";
import {SafeAreaView, View, Text, Image} from "react-native";

const Login = () => {
    return (
        <SafeAreaView>
            <View>
                <Image 
                    source={require('./assets/cart.png')}
                />
                <Text>Login</Text>
            </View>
        </SafeAreaView>
    )
}

export default Login;
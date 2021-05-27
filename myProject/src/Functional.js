import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, Button, Alert } from 'react-native';

const App = (props) => {
    const [orderCount, setOrderCount] = useState(0);

    useEffect(() => {
        Alert.alert("Clarusway", "Wellcome")
    }, []);

    useEffect(() => {
        if(orderCount > 10) {
            Alert.alert("Clarusway", "You have choosen more than 10")
        }
    }, [orderCount]);

    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize:60, alignSelf: 'center'}}>Count: {orderCount}</Text>
                <Button 
                    title= "Select Order"
                    onPress= {() => setOrderCount(orderCount + 1)}
                /> 
            </View>
        </SafeAreaView>
    )
}

export default App;
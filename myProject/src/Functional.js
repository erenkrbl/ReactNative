import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const App = (props) => {

    const [counter, setCounter] = useState(0);
    const updateCounter = () => setCounter(counter + 1);
    
    useEffect(() => {
        console.log("useEffect")
    }, [])

    console.log("Render");
    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize:80, alignSelf: 'center'}}>Count: {counter}</Text>
                <Button 
                    title= "UP!"
                    onPress= {updateCounter}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;
import React, {useState} from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const App = (props) => {

    const [counter, setCounter] = useState(0);

    const updateCounter = () => setCounter(counter + 1);
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
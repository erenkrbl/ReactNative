import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const App = (props) => {

    const [counter, setCounter] = useState(0);
    const [myNumber, setMyNumber] = useState(0);
    const updateCounter = () => setCounter(counter + 1);
    
    useEffect(() => {
        console.log("useEffect")
    }, []);

    useEffect(() => {
        console.log("useEffect counter")
    }, [counter]);

    useEffect(() => {
        console.log("useEffect myNumber")
    }, [myNumber])

    console.log("Render");
    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize:60, alignSelf: 'center'}}>Count: {counter}</Text>
                <Button 
                    title= "UP!"
                    onPress= {updateCounter}
                />
                <Text style={{fontSize:60, alignSelf: 'center'}}>myNumber: {myNumber}</Text>
                <Button 
                    title= "Change Number!"
                    onPress= {()=>setMyNumber(myNumber +1 )}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;
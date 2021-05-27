import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            counter: 0
        }
    }
    render () {
        return (
            <SafeAreaView>
                <View>
                    <Text style={{fontSize: 200, fontWeight: 'bold', alignSelf: 'center'}}>{this.state.counter}</Text>
                    <Button 
                        title = "classUP!"
                        onPress = {() => this.setState({counter: this.state.counter + 1})}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default App;
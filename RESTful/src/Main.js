import axios from 'axios';
import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const Main = (props) => {

    const fetchDataThen = () => {
        let myData = [];
        console.log("Starting Fetch..")

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response)
                myData = response.data;
            })
            .catch((error) => {
                console.log(error)
            })
        console.log(myData);
        console.log("End Fetch...")

    }
    return (
        <SafeAreaView>
            <View>
                <Text>Main</Text>
                <Button title="Fetch Data" onPress={fetchDataThen}/>
            </View>
        </SafeAreaView>
    )
}

export default Main;


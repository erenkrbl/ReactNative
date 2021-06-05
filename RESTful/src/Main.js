import axios from 'axios';
import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const Main = () => {

    const fetchDataThen = () => {

        console.log("Starting Then Fetch..")

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response)
                
            })
            .catch((error) => {
                console.log(error)
            })
       
        console.log("End Then Fetch...")

    }

    const fetchDataAwait = async () => {
        console.log("Starting await fetch");
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        console.log(response);
        console.log("end await fetch")
    }
    return (
        <SafeAreaView>
            <View>
                <Text>Main</Text>
                <Button title="Fetch Data with Then" onPress={fetchDataThen}/>
                <Text></Text>
                <Button title="Fetch Data with Await" onPress={fetchDataAwait}/>
            </View>
        </SafeAreaView>
    )
}

export default Main;


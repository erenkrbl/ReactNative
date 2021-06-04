import axios from 'axios'
import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const Main = (props) => {

    const FetchData = () => {

        console.log("Starting fetch..")
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
        console.log("End fetch")


    }
    return (
        <SafeAreaView>
            <View>
                <Text>Main</Text>
                <Button title="FetchData" onPress={FetchData}/>
            </View>
        </SafeAreaView>
    )
};

export default Main;
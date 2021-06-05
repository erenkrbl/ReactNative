import axios from 'axios';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';

const Main = (props) => {
    const [userData, setUserData] = useState([]);

    const fetchDataThen = () => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => {
                console.log(data)
                setUserData(data)
                
            })
            .catch((error) => {
                console.log(error)
            })  

    }

    const fetchDataAwait = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        setUserData(response.data)
    }
    return (
        <SafeAreaView>
            <View>
                <Text>Main</Text>
                <Button title="Fetch Data with Then" onPress={fetchDataThen}/>
                <Button title="Fetch Data with Await" onPress={fetchDataAwait}/>

                <FlatList 
                    data={userData}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

export default Main;


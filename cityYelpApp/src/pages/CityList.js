import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

const CityList = (props) => {

    const [cityList, setCityList] = useState([]);

    //ASYNC-AWAİT

    const fetchCityData = async () => {
        const response = await axios.get("https://opentable.herokuapp.com/api/cities");
        //setCityList(data.cities);
        console.log(response)
    }

    useEffect(() => {
        fetchCityData();
    }, [])

    const renderCities = ({item}) => <Text>{item}</Text>

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={cityList}
                    renderItem={renderCities}
                />
            </View>
        </SafeAreaView>
    )
}

export { CityList }
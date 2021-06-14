import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import { CityItem, SearchBar } from '../components'

let originalList = []

const CityList = (props) => {

    // const [originalList, setOriginalList] = useState([]);

    const [cityList, setCityList] = useState([]);

    //ASYNC-AWAİT

    const fetchCityData = async () => {
        const { data } = await axios.get('http://opentable.herokuapp.com/api/cities');
        setCityList(data.cities);
        originalList = [...data.cities]
        // setOriginalList(data.cities)
    }

    useEffect(() => {
        fetchCityData();
    }, [])

    const renderCities = ({item}) => {
        return (
        
            <CityItem 
                cityName={item}
                onSelect={() => props.navigation.navigate('Restaurants', {selectedCity: item})}  
            /> 
        )
    }

    const renderSeparator = () => <Viev style={{ borderWidth: 1, borderColor: '#e0e0e0' }} />

    function searchCity(search){
        const filteredCities = originalList.filter(city => {
            const text = search.toUpperCase();
            const cityName = city.toUpperCase();
            return cityName.indexOf(text) > -1;
        })

        setCityList(filteredCities)

    }

    return (
        <SafeAreaView>
            <View>

                <SearchBar 
                    placeholder= 'Search for a City...'
                    onSearch = {(value) => searchCity(value)}
                />
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={cityList}
                    renderItem={renderCities}
                    ItemSeparotorComponent= {renderSeparator}
                    
                />
            </View>
        </SafeAreaView>
    )
}

export { CityList }
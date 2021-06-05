import axios from 'axios';
import React from 'react';
import { SafeAreaView, View, Text, Tou } from 'react-native';
import Button from './components/Button';

const Main = (props) => {
    
    return (
        <SafeAreaView>
            <View>
                <Button
                    title="Suggest New Restaurant"
                />
            </View>
        </SafeAreaView>
    )
}

export default Main;


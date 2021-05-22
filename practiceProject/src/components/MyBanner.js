import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyBanner = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Banner</Text>
        </View>
    );
};

export default MyBanner;

const styles = StyleSheet.create({
    container: {},
    text: {}

});
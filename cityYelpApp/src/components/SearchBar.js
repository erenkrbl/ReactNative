import React from 'react';
import {TextInput, View, StyleSheet, ProgressViewIOS} from 'react-native';

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={props.placeholder}
                onChangeText = {(value) => props.onSearch(value)}
            />
        </View>
    )
}

export { SearchBar }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e0e0e',
        margin: 5,
        padding: 5,
        borderRadius: 5
    }
})
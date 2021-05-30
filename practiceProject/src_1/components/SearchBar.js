import React from "react";
import {View, TextInput, StyleSheet} from "react-native";

const SearchBar = (props) => {
    return (
        <View style={styles.searchBar}>
        <TextInput 
            placeholder="Enter a product"
            onChangeText = {props.onSearch}
        />
    </View>
    )
}

export { SearchBar };

const styles = StyleSheet.create({
    searchBar : {
        backgroundColor: '#eceff1',
        padding: 5,
        margin: 10,
        borderRadius: 10
    }
})



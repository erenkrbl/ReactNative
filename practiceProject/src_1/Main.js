import React, {useEffect, useState} from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert, TextInput } from "react-native";
import productData from "./product_data.json";

import { ProductCard } from "./components"


const App = () => {
    const [searchValue, setSearchValue] = useState("");

    const renderListItem = ({item}) => <ProductCard product={item}/>


    // useEffect(() => {
    //     Alert.alert("Our Shop", "Welcome");
    // }, []);


    return (
        <SafeAreaView>
            <View>
                <Text style={styles.banner}>Our Shop</Text>
                <View style={styles.searchBar}>
                    <TextInput 
                        placeholder="Enter a product"
                        onChangeText= {(value) => setSearchValue(value)}
                    />
                </View>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data= {productData}
                    renderItem= {renderListItem}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    banner :{
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'   
    },
    searchBar : {
        backgroundColor: '#eceff1',
        padding: 5,
        margin: 10,
        borderRadius: 10
    }
})

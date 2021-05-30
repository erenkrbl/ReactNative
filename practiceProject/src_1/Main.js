import React, {useEffect, useState} from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert, TextInput } from "react-native";
import productData from "./product_data.json";

import { ProductCard, SearchBar } from "./components"


const App = () => {
    const [searchValue, setSearchValue] = useState("");
    const [displayList, setDisplayList] = useState([]);

    const renderListItem = ({item}) => <ProductCard product={item}/>


    useEffect(() => {
        // Alert.alert("Our Shop", "Welcome");
        setDisplayList(productData)
    }, []);

    useEffect(() => {
        const filteredValue = productData.filter(item => {
            const text = searchValue.toLocaleUpperCase();
            const productTitle = item.title.toLocaleUpperCase();

            return productTitle.indexOf(text) > -1;
        })
        setDisplayList(filteredValue)
    }, [searchValue])


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text style={styles.banner}>Our Shop</Text>
                {/* <View style={styles.searchBar}>
                    <TextInput 
                        placeholder="Enter a product"
                        onChangeText= {(value) => setSearchValue(value)}
                    />
                </View> */}

                <SearchBar 
                    onSearch={(value) => setSearchValue(value)}
                />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data= {displayList}
                    renderItem= {renderListItem}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}

/**
 * todo
 * 1-stock durumu belirtilecek (yapıldı)
 * 2-seacrh bar component oluşturulacak
 * <SeaechBar onSearch={....} />
 */

export default App;

const styles = StyleSheet.create({
    banner :{
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'   
    },
    // searchBar : {
    //     backgroundColor: '#eceff1',
    //     padding: 5,
    //     margin: 10,
    //     borderRadius: 10
    // }
})

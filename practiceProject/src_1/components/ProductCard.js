import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

// {
//     "id": 8,
//     "title": "Xiaomi Mijia Smart Home 360",
//     "imgURL": "https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg",
//     "price": "₺269,73",
//     "inStock": true
// }


const ProductCard = ({product}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri : product.imgURL}}
                style={styles.image}
            />
            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <Text>{product.title}</Text>
                <Text style={{fontWeight: 'bold'}}>{product.price}</Text>
            </View>
        </View>
    )
}

export { ProductCard }

const styles = StyleSheet.create({
    container : {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#eceff1'
    },
    image : {
        height: Dimensions.get("window").height / 4,
        resizeMode: 'contain'
    }

})
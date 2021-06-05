import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// id: 1301,
// uid: "ecd528e8-b909-466f-9039-fe590e5a8d3d",
// name: "380 Brasserie",
// type: "Comfort Food",
// description: "To ensure that each guest receives prompt, professional, friendly and courteous service. To maintain a clean, comfortable and well maintained premises for our guests and staff. To provide at a fair price – nutritional, well-prepared meals – using only quality ingredients. To ensure that all guests and staff are treated with the respect and dignity they deserve. To thank each guest for the opportunity to serve them. By maintaining these objectives we shall be assured of a fair profit that will allow us to contribute to the community we serve.",
// review: "Ambience was good, service was no nonsense but friendly.",
// logo: "https://loremflickr.com/500/500/restaurant",
// phone_number: "898-669-1930",
// address: "6721 Treutel Hollow, Skilesstad, AK 89177-5312",

const RestaurantCard = (props) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Salt Curry</Text>       
            </View>
        </View>  
    )
}

export { RestaurantCard };

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#ffccbc'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25
    }
})
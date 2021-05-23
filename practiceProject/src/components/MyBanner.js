import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyBanner = (props) => {
    function checkedActiveStatus(){
        if(!props.isActive){
            return <Text>Not active</Text>
        }else{
            return null;
        }
    }

    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <View style={{flex:1}}>
                    <Text style={styles.text}>{props.title}</Text>
                    <Text>{props.desc}</Text>
                </View>
                {checkedActiveStatus()}
            </View>
        </View>
    );
};

export default MyBanner;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    text: {
        fontWeight: 'bold',
        fontSize: 17,
    }

});
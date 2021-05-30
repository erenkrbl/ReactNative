import { StyleSheet } from 'react-native';

const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303e45'
    },
    banner : {
        flexDirection : 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    todoText: {
        color: '#ff9b31',
        fontSize: 50,
        fontWeight: 'bold'
    },
    todoCount: {
        color: '#ff9b31',
        fontSize: 35,
        fontWeight: 'bold'
    }  
})


export default main;
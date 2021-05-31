import { StyleSheet, Dimensions } from 'react-native';

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
    },
    emptyComponent: {
        color: 'white',
        textAlign: 'center'
    }  
})

const todo_input = StyleSheet.create({
    container: {
        backgroundColor: '#a7b6bd',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    inputContainer: {
        backgroundColor: '#e0e0e0',
        padding: 5,
        margin: 5,
        borderRadius:10
    },
    buttonContainer: {
        backgroundColor: '#4a636e',
        padding:10,
        margin:10,
        borderRadius:10,
        width: Dimensions.get('window').width * 0.40,
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'

    }
})

const todo_card = StyleSheet.create({
    container: {
        backgroundColor: '#a7b6bd',
        padding: 5,
        margin: 5,
        borderRadius: 5
    },
    text: {
        fontSize: 20
    }
})


export {main, todo_input, todo_card};
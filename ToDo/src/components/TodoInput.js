import React from 'react';
import { Text, View, TextInput, TouchableOpacity  } from 'react-native';
import { todo_input} from '../styles'

const TodoInput = (props) => {
    return (
        <View style={todo_input.container}>
            <View style={todo_input.inputContainer}>
                <TextInput 
                    placeholder='Type something to do...'
                />
            </View>
            <TouchableOpacity style={todo_input.buttonContainer}>
                <Text style={todo_input.buttonText}>Add ToDo</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TodoInput;
import React, { useState } from 'react';
import { SafeAreaView, Text, View, FlatList, KeyboardAvoidingView } from 'react-native';
import { main } from "./styles"
import { TodoInput, TodoCard } from "./components"

/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */

const Main = () => {

    const [list, setList] = useState([]);

    function addTodo (text){
        const element = {
            id: list.length,
            todo: text,
            isDone: false
        }
        const newArray = [element, ...list]
        // newArray.push(element)

        //console.log(newArray);
        setList(newArray)

    }

    function doneTodo(todoId) {
        const newArray = [...list];
        const todoIndex = newArray.findIndex(item => item.id == todoId);
        newArray[todoIndex].isDone = !newArray[todoIndex].isDone;
        
        setList(newArray)
    }

    function removeTodo(todoId) {
        const newArray = [...list];
        const todoIndex = list.findIndex(t => t.id == todoId);
        // console.log("todoId: " + todoId);
        // console.log(newArray)

        newArray.splice(todoIndex, 1);
        setList(newArray)

    }

    const renderTodo = ({item}) => {
        return (
            <TodoCard 
                data={item}
                onDone={() => doneTodo(item.id)} // onDone={(id) => doneTodo(id)}
                onRemove= {() => removeTodo(item.id)}
            />
        )
    } 
    

    return (
        <SafeAreaView style={main.container}>
            <KeyboardAvoidingView style={main.container}>
                <View style={main.banner}>
                    <Text style={main.todoText}>ToDo</Text>
                    <Text style={main.todoCount}>{list.filter(t => t.isDone === false).length}</Text>
                </View>
                <FlatList
                    keyExtractor={(item, index) => {index.toString()}} 
                    data={list}
                    renderItem={renderTodo}
                    ListEmptyComponent={() => <Text style={main.emptyComponent}>Nothing to do..</Text>}
                />
                <TodoInput 
                    onTodoEnter = {todoText => addTodo(todoText)}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Main;
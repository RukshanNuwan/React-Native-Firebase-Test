import React, { useState, useEffect } from 'react';

import { Text, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Appbar, Button, TextInput } from 'react-native-paper';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);

    const ref = firestore().collection('todos');


    // ##########################################################
    // Get Function
    // ##########################################################
    useEffect(() => {
        return ref()
    })


    // ##########################################################
    // Add Function
    // ##########################################################
    addToDo = async () => {
        await ref.add({
            title: todo,
            complete: false
        }).then(() => {
            alert(`Added ${todo}`);
        });

        // Set back to default
        setTodo('');
    }

    return (
        <>
            <ScrollView>
                <Text>List of ToDos</Text>
            </ScrollView>

            <TextInput label={'New ToDo'} value={todo} onChangeText={setTodo} />

            <Button onPress={() => addToDo()}>Add ToDo</Button>
        </>
    );
}

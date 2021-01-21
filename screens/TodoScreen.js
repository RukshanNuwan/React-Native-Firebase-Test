import React, { useState, useEffect } from 'react';

import { FlatList, Text, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Button, TextInput } from 'react-native-paper';

import TodoItem from '../components/TodoItem';


const Todos = () => {
    const [todo, setTodo] = useState('');
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState([]);

    const ref = firestore().collection('todos');


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

    // Want to render if 'loading' state is true
    if (loading) {
        return null;
    }

    // ##########################################################
    // Get Function
    // useEffect() must be the last. Otherwise connection with fire base won't work properly
    // ##########################################################
    useEffect(() => {
        return ref.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(itemDoc => {
                // data() -> Retrieves all fields in the document as an Object
                const { title, complete } = itemDoc.data();
                list.push({
                    id: itemDoc.id,
                    title,
                    complete
                });
            });
            setTodos(list);

            if (loading) {
                setLoading(false);
            }
        });
    }, []);


    return (
        <>
            <FlatList
                style={{ flex: 1 }}
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TodoItem {...item} />}
            />

            <TextInput label={'New ToDo'} value={todo} onChangeText={setTodo} />

            <Button onPress={() => addToDo()}>Add ToDo</Button>
        </>
    );
}

export default Todos;
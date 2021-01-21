import React from 'react';

import { StyleSheet, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';

const TodoItem = ({ id, title, complete }) => {

    toggleCompleted = async (itemId) => {
        // Update Function
        // Update is not working when same item clicked
        await firestore()
            .collection('todos')
            .doc(itemId)
            .update({
                complete: !complete
            });

        // // Delete Function
        // await firestore()
        //     .collection('todos')
        //     .doc(itemId)
        //     .delete();
    }


    return (
        <List.Item
            title={title}
            onPress={() => toggleCompleted(id)}
            left={props => (
                <List.Icon {...props} icon={complete ? 'check' : 'close'} />
            )}
            style={styles.todoItem}
        />

    );
}

const styles = StyleSheet.create({
    todoItem: {
        margin: 5,
        borderRadius: 3,
        backgroundColor: 'lightgrey'
    }
});

export default TodoItem;
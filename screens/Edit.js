import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Edit = () => {
    return (
        <View style={styles.container}>
            <Text> Edit Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
    }
});

export default Items;
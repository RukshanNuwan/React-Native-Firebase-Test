import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Item = () => {
    return (
        <View style={styles.container}>
            <Text> Item Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen'
    }
});

export default Item;
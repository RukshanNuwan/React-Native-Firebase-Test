import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

const Items = () => {
    return (
        <View style={styles.container}>
            <Text> Items Screen </Text>
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
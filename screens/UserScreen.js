import React, { Component } from 'react'

import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase';

export default class UserScreen extends Component {
    // Firebase Configurations
    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyC-2S2rcZ7WlK51ngC1rwA9VMn_WV92iOk",
            authDomain: "fir-testing-app-bcbff.firebaseapp.com",
            projectId: "fir-testing-app-bcbff",
            storageBucket: "fir-testing-app-bcbff.appspot.com",
            messagingSenderId: "745459893267",
            appId: "1:745459893267:web:d3b8aa6d64df0b65ebebe6"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        // #####################################################################
        // Get Data ->
        // once() = db eken only one time data genawa
        // on() = db eke data change wena hema parama data genawa
        // #####################################################################
        firebase.database().ref('user').on('value', (data) => {
            console.log(data.toJSON());
        });

        // Set timer to insert new data after 5 sec
        setTimeout(() => {
            // #####################################################################
            // Save Data -> set()
            // #####################################################################
            firebase.database().ref('users/004').set(
                {
                    name: 'Pramod',
                    age: 23
                }
            ).then(() => {
                alert('Data added');
            }).catch((error) => {
                alert(error);
            });
        }, 5000);

        // #####################################################################
        // Update Data -> update()
        // #####################################################################
        firebase.database().ref('users/001').update({
            // This time gonna change only name. So only type name here
            name: 'Rukshan Wijendra'
        }).then(() => {
            alert('Data Updated');
        }).catch((error) => {
            alert(error);
        })

        // #####################################################################
        // Delete Data -> remove()
        // ref('users/{id}/{property}')
        // property ekak delete karanna onenam property eka denna one. nethnam one ne
        // #####################################################################
        firebase.database().ref('users/004').remove().then(() => {
            alert('Data Deleted');
        }).catch((error) => {
            alert(error);
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>User screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

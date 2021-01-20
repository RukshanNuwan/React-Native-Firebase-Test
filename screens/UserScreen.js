import React, { Component } from 'react'

import { Button, StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';


export default class UserScreen extends Component {
    // ---------------------------------------------------------------------------

    //
    // FireBase
    //

    // Firebase Configurations
    // componentWillMount() {
    //     var firebaseConfig = {
    //         apiKey: "AIzaSyC-2S2rcZ7WlK51ngC1rwA9VMn_WV92iOk",
    //         authDomain: "fir-testing-app-bcbff.firebaseapp.com",
    //         projectId: "fir-testing-app-bcbff",
    //         storageBucket: "fir-testing-app-bcbff.appspot.com",
    //         messagingSenderId: "745459893267",
    //         appId: "1:745459893267:web:d3b8aa6d64df0b65ebebe6"
    //     };

    // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);

    // #####################################################################
    // Get Data
    // once() = db eken only one time data genawa
    // on() = db eke data change wena hema parama data genawa
    // #####################################################################
    // firebase.database().ref('user').on('value', (data) => {
    //     console.log(data.toJSON());
    // });

    // Set timer to insert new data after 5 sec
    // setTimeout(() => {
    // #####################################################################
    // Save Data
    // set()
    // #####################################################################
    //     firebase.database().ref('users/004').set(
    //         {
    //             name: 'Sunil',
    //             age: 23
    //         }
    //     ).then(() => {
    //         alert('Data added');
    //     }).catch((error) => {
    //         alert(error);
    //     });
    // }, 5000);

    // #####################################################################
    // Update Data
    // update()
    // #####################################################################
    // firebase.database().ref('users/001').update({
    //     // This time gonna change name only.
    //     name: 'Rukshan Wijendra'
    // }).then(() => {
    //     alert('Data Updated');
    // }).catch((error) => {
    //     alert(error);
    // })

    // #####################################################################
    // Delete Data
    // remove()
    // ref('users/{id}/{property}')
    // property ekak delete karanna onenam property eka denna one. nethnam one ne
    // #####################################################################
    // firebase.database().ref('users/004').remove().then(() => {
    //     alert('Data Deleted');
    // }).catch((error) => {
    //     alert(error);
    // })
    // }

    // ---------------------------------------------------------------------------
    //
    // FireStore
    //

    state = {
        // user: {
        //     name: ""
        // }

        // ******************
        // AFTER RE-ORGANIZE
        // ******************
        users: []
    }

    // #####################################################################
    // Get data from firestore
    // get() -> one time read
    // onSanpshot() -> real time read
    // #####################################################################

    // this constructor will call getUser function every time when we load the app.
    constructor(props) {
        super(props);

        // this.getUser();
        // this.getUsers();


        // Get user data in real time -> onSnapshot()
        this.subscriber = firestore()
            .collection('users')
            // .doc('B5ykSrH1iWAnx45JZXNe')
            // .onSnapshot(documentSnapshot => {
            // this.setState({
            // user: {
            //     name: documentSnapshot.data().name
            // }
            // });
            // });

            // ******************
            // AFTER RE-ORGANIZE
            // ******************
            .onSnapshot(documentSnapshots => {
                let users = []
                documentSnapshots.forEach(documentSnapshot => {
                    users.push(documentSnapshot.data());
                });

                this.setState({ users });
            });


        // // to inspect the collection, such as how many documents exist within it, access to the documents within the collection, any changes since the last query and more
        // firestore()
        //     .collection('users')
        //     .get()
        //     .then(querySnapshot => {
        //         console.log('Total users: ', querySnapshot.size);

        //         querySnapshot.forEach(documentSnapshot => {
        //             console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        //         });
        //     });
    }


    // #####################################################################
    // Add data to firestore
    // add()
    // #####################################################################
    addNewUser = async () => {
        // Auto generate characters
        let name = Math.random().toString(20).substring(5);

        firestore()
            .collection('users')
            .add({
                name,
                age: 25
            });
    }

    // #####################################################################
    // Update data
    // update()
    // it must pass the document id - doc() 
    // #####################################################################
    updateUser = async () => {
        let updateName = "Kamal Perera";

        firestore()
            .collection('users')
            .doc('S40v7jANyjJIVZk4tbNf')
            .update({
                name: updateName
            });
    }

    // #####################################################################
    // Delete data
    // delete()
    // it must pass the document id - doc() 
    // #####################################################################
    deleteUser = async () => {
        firestore()
            .collection('users')
            .doc('fS5koz1mNgO5fJBSn47K')
            .delete()
    }


    // #####################################################################
    // Transactions
    // Transactions are useful when you want to update a field's value based on its current value, or the value of some other field
    // #####################################################################
    incrementAge = (userId) => {
        // Create a reference to the user
        const userReference = firestore().doc(`users/${'A3IQAhQ4DSPKW3NEksF2'}`);
        return firestore().runTransaction(async transaction => {
            // Get user data first
            const userSnapshot = await transaction.get(userReference);

            if (!userSnapshot.exists) {
                throw 'User dows not exist';
            }

            await transaction.update(userReference, {
                age: userSnapshot.data().age + 1
            });
        });
    }


    // #####################################################################
    // Batch Write
    // Execute multiple operations as a single batch that contains any combination of set, update, or delete
    // #####################################################################
    deleteAllUsers = async () => {
        // Get all users
        const usersQuerySnapshot = await firestore()
            .collection('users')
            .get();

        // Create a new batch instance
        const batch = firestore().batch();

        usersQuerySnapshot.forEach(documentSnapshot => {
            batch.delete(documentSnapshot.ref);
        });

        batch.commit();
    }


    // // Get user data by given document id
    // getUser = async () => {
    //     const user = await firestore()
    //         .collection("users")
    //         // Ordering
    //         .orderBy('age', 'desc')
    //         .doc('B5ykSrH1iWAnx45JZXNe')
    //         .get();

    //     console.log(user);
    // }


    // // Get users data - Filtering data using queries
    // getUser = async () => {
    //     const users = await firestore()
    //         .collection("users")
    //         .where('age', '>', 21)
    //         // Limiting
    //         .limit(5)
    //         .get();

    //     console.log(users);
    // }

    // ---------------------------------------------------------------------------

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>Name:  {this.state.user.name}</Text> */}

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        {/* Add New User Button */}
                        <Button title="Add New User" onPress={this.addNewUser} />
                    </View>

                    <View style={styles.button}>
                        {/* Update User Button */}
                        <Button title="Update User" onPress={this.updateUser} />
                    </View>

                    <View style={styles.button}>
                        {/* Delete User Button */}
                        <Button title="Delete User" onPress={this.deleteUser} />
                    </View>

                    <View style={styles.button}>
                        {/* Increment User Age */}
                        <Button title="Increment Age" onPress={this.incrementAge} />
                    </View>

                    <View style={styles.button}>
                        {/* Delete All Users */}
                        <Button title="Delete All" onPress={this.deleteAllUsers} />
                    </View>
                </View>

                {/* ******************
                    AFTER RE-ORGANIZE
                    ****************** */}
                <View style={styles.dataContainer}>
                    {this.state.users.map((user, index) => <View key={index}>
                        <Text>{user.name} - {user.age}</Text>
                    </View>)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonContainer: {
        marginBottom: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    button: {
        marginHorizontal: 5,
        marginVertical: 5
    },

    dataContainer: {
        padding: 20,
        borderColor: 'teal',
        borderWidth: 1,
        borderRadius: 3
    }
});

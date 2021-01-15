import * as firebase from 'firebase';

// Firebase Configurations
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

export default firebase;
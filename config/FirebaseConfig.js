import firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/firebase-storage'

const firebaseConfig = {
    apiKey: "AIzaSyAZbJ9yYOXMK_vru_5kMrwSFmdwuTMVrvU",
    authDomain: "instagramswiftui-103e5.firebaseapp.com",
    projectId: "instagramswiftui-103e5",
    storageBucket: "instagramswiftui-103e5.appspot.com",
    messagingSenderId: "675799172993",
    appId: "1:675799172993:web:36a24e97fdd6e6712c4a80",
    measurementId: "G-BVMM2L0KQ6"
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase
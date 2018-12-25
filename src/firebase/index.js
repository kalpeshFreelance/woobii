/**
 * Firebase Login
 * Vuely comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Initialize Firebase 
const config = {
    // apiKey: "AIzaSyAj_UPprH33ya9dN6J67XaHP12s_G1QZD0",
    // authDomain: "woobii-new-1544112849185.firebaseapp.com",
    // databaseURL: "https://woobii-new-1544112849185.firebaseio.com",
    // projectId: "woobii-new-1544112849185",
    // storageBucket: "woobii-new-1544112849185.appspot.com",
    // messagingSenderId: "40621460075"
    apiKey: "AIzaSyDppzQXBNmvYgGB3oX_58pQwbnTtEIOK-w",
    authDomain: "woobii-login.firebaseapp.com",
    databaseURL: "https://woobii-login.firebaseio.com",
    projectId: "woobii-login",
    storageBucket: "woobii-login.appspot.com",
    messagingSenderId: "196102150424"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const database = firebase.database();

export {
    auth,
    googleAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider,
    database
};

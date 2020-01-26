import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBnViFo1NB4jd7PZK4kq5zYfZCWB2iw_U8',
    authDomain: 'crwn-db-cdf36.firebaseapp.com',
    databaseURL: 'https://crwn-db-cdf36.firebaseio.com',
    projectId: 'crwn-db-cdf36',
    storageBucket: 'crwn-db-cdf36.appspot.com',
    messagingSenderId: '807571900755',
    appId: '1:807571900755:web:f03a5b366352c0a14739a6',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log(`error creating user : ${error.message}`)
        }
    }

    return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

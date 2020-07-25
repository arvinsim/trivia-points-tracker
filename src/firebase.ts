import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import get from "lodash/get";
// import { functions } from "firebase";

import { store, setUser, resetUser } from "./redux";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");

export const signInWithGoogle = async () => {
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const result = await auth.signInWithPopup(provider);

    // This gives you a Google Access Token.
    // const token = result.credential;
    // console.log(token);

    // The signed-in user info.
    const user = result.user;
    console.log(user);

    store.dispatch(
      setUser({
        displayName: get(user, "displayName", ""),
        email: get(user, "email", ""),
      })
    );
    window.location.assign("/points-tracker");
  } catch (error) {
    console.error(error);
  }
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    store.dispatch(resetUser());
    // window.location.assign("/");
    // signed out
  } catch (e) {
    // an error
  }
};

import firebase from "@firebase/app";
import "@firebase/database";
import "@firebase/storage";

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DB}`,
  projectId: `${process.env.REACT_APP_FIREBASE_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING}`
};

firebase.initializeApp(config);

export const database = firebase.database();
export const storage = firebase.storage();

export const getFile = ref => storage.ref(ref).getDownloadUrl();

export const deleteFile = ref => {
  storage.ref(ref).delete();
};

export const storageRef = ref => storage.ref(ref);

export const getData = ref =>
  database
    .ref(ref)
    .once("value")
    .then(snapshot => snapshot.val());

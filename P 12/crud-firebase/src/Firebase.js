import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBf-vbKdoRt-w4E1dA-0nSZnEK8OqV9pow",
    authDomain: "reactfirestore-a08e3.firebaseapp.com",
    projectId: "reactfirestore-a08e3",
    storageBucket: "reactfirestore-a08e3.appspot.com",
    messagingSenderId: "516678574262",
    appId: "1:516678574262:web:df5d2b1bf50f48b6174617"
  };

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;

import firebase from '@react-native-firebase/app';

import {firebaseConfig} from './api';

// For exclude warning in LOGS please use this conditional initializing
export const db = () => {
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
};

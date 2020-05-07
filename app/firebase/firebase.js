import firebase from '@react-native-firebase/app';

import {firebaseConfig} from './api';

export const db = () => {
  firebase.initializeApp(firebaseConfig);
};

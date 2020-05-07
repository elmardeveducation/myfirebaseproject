import React, {Component} from 'react';
import MainScreen from './app/screens/mainScreen';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import {db} from './app/firebase/firebase';

export default class App extends Component {
  componentDidMount() {
    // db();
    /*  var firebaseConfig = {
      apiKey: 'AIzaSyApuydNORT28zYuzLoW4O7bJpxksu509D0',
      authDomain: 'test-21437.firebaseapp.com',
      databaseURL: 'https://test-21437.firebaseio.com',
      projectId: 'test-21437',
      storageBucket: 'test-21437.appspot.com',
      messagingSenderId: '264851155102',
      appId: '1:264851155102:web:bdc19f04c05d156adbf38f',
      measurementId: 'G-GWJZ2ZNE46',
    };
    firebase.initializeApp(firebaseConfig);

    database()
      .ref('/logins/test')
      .once('value')
      .then(snapshot => {
        console.log('My read Name=', snapshot.val());
      });
    const users = database()
      .ref('/logins/test')
      .orderByValue()
      .once('value');

    /* console.log('My read Name=', users);
     */
    /*       .set({name: 'Elmar', password: '123456'}); */
    /* database()
      .ref('/logins/test')
      .set({name: 'Elmar', password: '123456'})
      .then(() => console.log('Data is inserted'));

    */
  }
  render() {
    return <MainScreen />;
  }
}

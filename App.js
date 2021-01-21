import React, {Component} from 'react';
import MainScreen from './app/screens/mainScreen';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import {db} from './app/firebase/firebase';

export default class App extends Component {
  componentDidMount() {
    // db();
    const firebaseConfig = {
      apiKey: "AIzaSyC7IzxiyeGdA-Ebd9IBRh1ZsdBzotOhblg",
      authDomain: "myfirebaseprojectexample.firebaseapp.com",
      databaseURL: "https://myfirebaseprojectexample-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "myfirebaseprojectexample",
      storageBucket: "myfirebaseprojectexample.appspot.com",
      messagingSenderId: "598021300765",
      appId: "1:598021300765:web:37ea9650890bef24f01cf4",
      measurementId: "G-0ZFGVFPJXG"
    };


    //  documentation https://rnfirebase.io/database/usage#removing-data
    
    firebase.initializeApp(firebaseConfig);

 /*    database()
      .ref('/users/556')
      .once('value')
      .then(snapshot => {
        console.log('My read Name=', snapshot.val().name, 'myPassword=', snapshot.val().password);
      }); */


/*      this.onValueChange= database()
      .ref('/users/556')
      .on('value', snapshot => {
        console.log('My read Name=', snapshot.val().name, 'myPassword=', snapshot.val().password);
      }); */
 /*      database().ref('/users/556').update({password:'999'})
      .then(() => console.log('Data is updated'));      
 */
this.newReference = database()
  .ref('/users')
  .push();

console.log('Auto generated key: ', this.newReference.key);

this.newReference.set({name: 'Javid',
    password: '2222222',
  })
  .then(() => console.log('Data updated.'));  
}
/* componentWillUnmount(){
  database()
        .ref(`/users/556`)
        .off('value', this.onValueChange);
} */
      /*
      const users = database()
      .ref('/logins/test')
      .orderByValue()
      .once('value');
 */
    /* console.log('My read Name=', users);
     */
    /*       .set({name: 'Elmar', password: '123456'}); */
    /* database().ref('/users').set({'556':{name: 'Mamedali', password: '123456'}})
      .then(() => console.log('Data is inserted'));
      }*/

  render() {
    return <MainScreen />;
  }
}

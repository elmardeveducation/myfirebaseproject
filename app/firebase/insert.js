import database from '@react-native-firebase/database';
export const reference ()=> {database().ref('/users/124');
    reference.set({name: 'Elmar', password: '123456'})}
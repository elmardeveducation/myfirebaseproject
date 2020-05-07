import React from 'react';
import database from '@react-native-firebase/database';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {db} from '../../firebase/firebase';

const MainScreen = () => {
  const updateData = name => {
    db();
    const newReference = database()
      .ref(`/logins/test/${name}`)
      .push();
    newReference.set({name: name, password: '123456'});
    console.log('Data Inserted from mainscreen');
    // database()
    //   .ref('/logins/test')
    //   .once('value')
    //   .then(snapshot => {
    //     console.log('My read Name=', snapshot.val());
    //   });
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.upView}>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={require('../../assets/images/card1.png')}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={() => updateData('Hello')}
          style={styles.touchableView}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

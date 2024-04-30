import { Text, View, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import MainHeader from '../Components/MainHeader';

export class ProfilePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainHeader/>
        <Text>ProfilePage</Text>
        <Button onPress={()=>FIREBASE_AUTH.signOut()} title='Logout'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      width:'100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }
})

export default ProfilePage
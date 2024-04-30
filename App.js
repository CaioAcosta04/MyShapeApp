import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';


import { FIREBASE_AUTH } from './FirebaseConfig';

import LoginLayoutRoute from './Routes/LoginLayoutRoute';
import MainPageLayout from './Routes/MainPageLayout';


export default function App() {
  const [user,setUser] = useState(null)

  useEffect(()=>{
    console.log('Entrou no useEffect')
    onAuthStateChanged(FIREBASE_AUTH, (user)=>{
      console.log('user',user);
      setUser(user);
    });
  })

  return (
    <NavigationContainer>
      {user ? <MainPageLayout/> : <LoginLayoutRoute/>}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

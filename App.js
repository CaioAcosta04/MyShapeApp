import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import Login from './Screens/Login';
import MainPage from './Screens/MainPage';
import { useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyCEPMu8bMCitqcXWMeLVUJ5cPf_SvtZJM0",
  authDomain: "myshapeapp-f9c29.firebaseapp.com",
  projectId: "myshapeapp-f9c29",
  storageBucket: "myshapeapp-f9c29.appspot.com",
  messagingSenderId: "658949936573",
  appId: "1:658949936573:web:4b26860accb5e1bb9deed4",
  measurementId: "G-RZK7HGC7BE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  function changeLogged(){
    setIsLogged(!isLogged)
  }

  let screen = <Login onClick={changeLogged}/>

  if(isLogged){
    screen = <MainPage onClick={changeLogged}/>
  }

  return (<>
      {screen}
  </>
    
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

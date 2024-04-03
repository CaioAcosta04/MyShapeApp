import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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

const LoginPage = (props) => {
    const [emailState, setEmailState] = useState('');
    const [senhaState, setSenhaState] = useState('');

    function createUser(){

        //Implementar logica de email e senha

        createUserWithEmailAndPassword(auth, emailState, senhaState)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("Conta criada com sucesso!")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      }

  return (

    <Modal
        visible={props.modalVisible}
        animationType='slide'
        transparent={true}
    >
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Faça seu login</Text>
            </View>
            <View style={styles.inputsView}>
                <TextInput
                    placeholder='Email'
                    style={styles.textInput}
                    onChange={newText => setEmailState(newText)}
                />
                <TextInput
                    placeholder='Senha'
                    style={styles.textInput}
                    onChange={newText => setSenhaState(newText)}
                />
            </View>

            <View style={styles.btnView}>
                <TouchableOpacity 
                    onPress={createUser}
                    style={styles.btnLogin}
                    >
                    <Text style={styles.btnTxt}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={props.onClose}
                    style={styles.back}
                    >
                    <Text style={styles.btnTxt}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.loginItensView}>
                <TouchableOpacity>
                <Image 
                    styles={styles.loginItem1}
                    source={require('../assets/apple.png')} 
                    resizeMode='contain'
                />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    styles={styles.loginItem2}
                    source={require('../assets/google.png')}
                    resizeMode='contain'
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                    styles={styles.loginItem3}
                    source={require('../assets/facebook.png')}
                    resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '60%',
        display: 'flex',
        alignItens: 'center',
        backgroundColor: 'white',
        marginTop: 350,
        borderRadius: 50,
    },
    textLogin: {
        textAlign: 'center'
    },

    titleView: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 25,
        marginTop:20
    },
    
    inputsView:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 280,
        height: 50,
        backgroundColor: '#D9D9D9',
        marginTop: 30,
        fontSize: 20,
        padding:5,
        borderRadius: 10
    },

    btnView: {
        display: 'flex',
        flexDirection: 'row',
        width: 280,
        justifyContent: 'space-around',
        marginTop: 30,
        marginHorizontal: 55,
    },
    btnLogin: {
        backgroundColor: 'black',
        width: 130,
        height: 45,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        width: 130,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#D9D9D9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTxt: {
        color: 'white',
        fontSize: 20
    },
    loginItensView:{
        marginTop: 80,
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
})

export default LoginPage
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LoginPage from '../Modals/LoginPage';
import RegusterPage from '../Modals/RegisterPage';
import { googleSignIn } from '../FirebaseConfig';


const Login = () => {
    const [LoginState, setLoginState] = useState(false)
    const [registerState, setRegisterState] = useState(false)


    function abrirLoginState(){
        setLoginState(true)
    }
    function fecharLoginState(){
        setLoginState(false)
    }

    function abrirRegisterState(){
        setRegisterState(true)
    }
    function fecharRegisterState(){
        setRegisterState(false)
    }
  return (
    <View style={styles.container}>
        { LoginState && <LoginPage onClose={fecharLoginState} modalVisible={LoginState}/>}
        { registerState && <RegusterPage onClose={fecharRegisterState} modalVisible={registerState}/>}
        
      <View style={styles.backgroundLogin}>

        <View style={styles.infosView}>
          <Image 
            style={styles.logo} 
            source={require('../assets/Images/fullLogo.jpeg')}
            resizeMode='contain'/>
          <Text style={styles.sloganText}>O seu melhor parceiro de treino.</Text>
        </View>

        <View style={styles.optionsView}>

            <View style={styles.titleOptions}>
                <Text style={styles.titleText}>Para começar...</Text>
            </View>

            <View style={styles.btnsView}>
                <TouchableOpacity 
                    style={styles.btnLogin}
                    onPress={abrirLoginState}
                    >
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.btnLogin}
                    onPress={abrirRegisterState}
                    >
                    <Text style={styles.btnText}>Sign Up</Text>
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

            <TouchableOpacity
              
            >
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
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundLogin: {
      height: "100%",
      width:'100%',
      backgroundColor: '#000000'
    },
    infosView: {
      width: '100%',
      height: "70%",
      backgroundColor: 'black',
      display: 'flex',
      alignItems: 'center'
    },
    logo: {
      width: '90%',
      marginTop: -50,
    },
    sloganText: {
      color: 'white',
      fontSize: 22,
      marginTop: -165,
    },
    optionsView: {
      width: '100%',
      height: '30%',
      display: 'flex',
      backgroundColor: 'white',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      justifyContent: 'space-between'
    },
    titleOptions: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20
    },
    titleText: {
        fontSize: 25
    },
    btnsView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    btnLogin: {
        width: 150,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 20,
    },
    btnText: {
        color: 'white',
        fontSize: 25
    },
    loginItensView:{
      width: '100%',
      height: '40%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

export default Login





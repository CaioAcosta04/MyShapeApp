import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput, Image, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async ()=>{
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth,email,password);
            console.log('response: ', response);
            props.onClose
            setTimeout(()=>{console.log('Delay')}, 1000)
        }catch (error){
            console.log(error);
            alert('Sign In failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

  return (

    <Modal
        visible={props.modalVisible}
        animationType='slide'
        transparent={true}
    >
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Faça seu login</Text>
            </View>
            <View style={styles.inputsView}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    style={styles.textInput}
                    onChangeText={(text)=>(setEmail(text))}
                    autoCapitalize='none'
                />
                <TextInput
                    placeholder='Senha'
                    style={styles.textInput}
                    onChangeText={(text)=>(setPassword(text))}
                    autoCapitalize='none'
                    secureTextEntry
                />
            </View>

            <View style={styles.btnView}>

                {loading ? <ActivityIndicator size={20} color="#0000ff"/> : <>
                    <TouchableOpacity 
                        onPress={signIn}
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
                </>}

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
        </KeyboardAvoidingView>
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
        marginTop: 40,
        width: '100%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
})

export default LoginPage
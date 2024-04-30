import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, Image, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

    


const RegusterPage = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signUp = async ()=>{
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth,email,password);
            console.log(response);
            alert('Account created!')
        }catch (error){
            console.log(error);
            alert('Sign Up failed: ' + error.message);
        } finally {
            setLoading(false)
        }
    }

  return (
    <Modal
        visible={props.modalVisible}
        animationType='slide'
        transparent={true}
    >
        <KeyboardAvoidingView style={styles.container} behavior='padding' >
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Faça seu cadastro</Text>
            </View>
            <View style={styles.inputsView}>
                    <TextInput
                        placeholder='Nome Completo'
                        style={styles.textInput}
                    />
                    <TextInput
                        value={email}
                        placeholder='Email'
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(text)=>(setEmail(text))}
                    />
                    <TextInput
                        placeholder='Data de Nascimento'
                        style={styles.textInput}
                    />

                    <View style={styles.senhasView}>
                        <TextInput
                            placeholder='Senha'
                            style={styles.textInputSenha}
                            autoCapitalize='none'
                            secureTextEntry
                            onChangeText={(text)=>(setPassword(text))}
                        />
                        <TextInput
                            placeholder='Confirmação'
                            style={styles.textInputSenha}
                            autoCapitalize='none'
                            secureTextEntry
                        />
                    </View>
            </View>
            <View style={styles.btnView}>
            {loading ? <ActivityIndicator size={20} color="#0000ff"/> : 
                <>
                    <TouchableOpacity 
                        onPress={signUp}
                        style={styles.btnLogin}
                        >
                        <Text style={styles.btnTxt}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={props.onClose}
                        style={styles.back}
                        >
                        <Text style={styles.btnTxt}>Voltar</Text>
                    </TouchableOpacity>
                </>
            }
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
        height: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItens: 'center',
        backgroundColor: 'white',
        marginTop: 230,
        borderRadius: 50
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
    senhasView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:280,
        alignItems: 'center',
        marginTop: 30
    },
    textInputSenha: {
        width: 135,
        height: 50,
        backgroundColor: '#D9D9D9',
        fontSize: 18,
        padding:5,
        borderRadius: 10
    },
    loginItensView:{
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom:10
      },
})

export default RegusterPage
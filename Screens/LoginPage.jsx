import { View, Text, Modal, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const LoginPage = (props) => {

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
                />
                <TextInput
                    placeholder='Senha'
                    style={styles.textInput}
                />
            </View>

            <View style={styles.btnView}>
                <TouchableOpacity 
                    onPress={props.onClose}
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
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 30
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
    }
})

export default LoginPage
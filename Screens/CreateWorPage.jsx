import { Modal, Text, View, StyleSheet,TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'

import { EvilIcons } from '@expo/vector-icons'


const CreateWorPage = (props) => {
    return (
      <Modal
        animationType='slide'
      >
        <View style={styles.container}>
            <View style={styles.nameView}>
              <View style={styles.infosNameView}>
                <TextInput style={styles.nomeInput} placeholder="Novo Treino"/>
                <EvilIcons style={styles.iconInput} name="pencil" size={35} color="black" />
              </View>
            </View>
            <View style={styles.workoutView}>

            </View>
            <View style={styles.btnsView}>
              <TouchableOpacity
                  style={styles.btnCriar}
                  onPress={props.btnCancelar}
              >
                  <Text style={styles.btnText}>Criar Treino</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.btnCancelar}
                  onPress={props.onClose}
              >
                  <Text style={styles.btnText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
        </View>
      </Modal>
    )
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      backText: {
        color: 'blue'
      },
      nameView: {
        width: '100%',
      },
      infosNameView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        width: '60%',
        marginLeft: '5%',
      },
      nomeInput: {
        fontSize: 30,
        width:'80%',
      },
      workoutView: {
        height: '70%',
        backgroundColor:'blue',
      },
      btnsView:{
        display:'flex',
        flexDirection:'row',
        width: '70%',
        justifyContent:'space-around'
      },
      btnCriar: {
        backgroundColor: '#E7E7E7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 130
      },
      btnCancelar: {
        height: 50,
        width: 130,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#e7e7e7',
        borderWidth: 2
      },
      btnText: {
        fontSize: 20
      }
})

export default CreateWorPage
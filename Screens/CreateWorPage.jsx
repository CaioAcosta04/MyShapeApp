import { Modal, Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

const CreateWorPage = (props) => {
    return (
      <Modal
        animationType='slide'
      >
        <View style={styles.container}>
            <Text>New Workout</Text>
            <TouchableOpacity
                onPress={props.onClose}
            >
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>
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
      }
})

export default CreateWorPage
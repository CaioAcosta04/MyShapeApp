import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import React from 'react'

const RegusterPage = (props) => {
  return (
    <Modal
        visible={props.modalVisible}
        animationType='slide'
        transparent={true}
    >
        <View style={styles.container}>
            <Text style={styles.textLogin}>Register Page</Text>
            <TouchableOpacity 
                onPress={props.onClose}
            >
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
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
        marginTop: 250,
        borderRadius: 50
    },
    textLogin: {
        textAlign: 'center'
    }
})

export default RegusterPage
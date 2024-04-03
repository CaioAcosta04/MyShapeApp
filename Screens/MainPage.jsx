import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

const MainPage = (props) => {
    return (
    <View style={styles.container}>
        <Text>MainPage</Text>
        <TouchableOpacity onPress={props.onClick}>
            <Text>Voltar</Text>
        </TouchableOpacity>
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
})

export default MainPage
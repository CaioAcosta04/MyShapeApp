import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export class WorkoutForm extends Component {
  render() {
    return (
      <View style={styles.formContainer}>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    formContainer:{
        width: 300,
        height: 200,
        marginTop: 20,
        display: 'flex',
        justifyContent:'center'
    },
})

export default WorkoutForm
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import MainHeader from '../Components/MainHeader'

export class AnalyticsPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MainHeader/>
        <Text>AnalyticsPage</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      width:'100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  }
})

export default AnalyticsPage
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import React, { Component } from 'react'

import { Feather, AntDesign } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainHeader from '../Components/MainHeader'


export class HomePage extends Component {
  render() {
    return (

      <SafeAreaView style={styles.container}>
        <MainHeader/>
        <View style={styles.searchBar}>
          <AntDesign name="search1" size={30} color={'gray'}/>
          <TextInput style={styles.input} placeholder='Buscar treino'/>
        </View>
        <View style={styles.workoutsView}>
          
        </View>
        <View style={styles.btnAddView}>
          <TouchableOpacity>
            <Feather name="plus-circle" size={48} color={'gray'} />
          </TouchableOpacity>
        </View>
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
      justifyContent: 'space-between',
  },
  searchBar: {
    width:'70%',
    height: 50,
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7E7E7',
    borderRadius: 30,
    padding: 10,
    marginTop: 0
  },
  btnText:{
    textAlign: 'center'
  },
  workoutsView: {
    height: '70%',
    width: '90%',
    backgroundColor: '#E7E7E7',

  },
  btnAddView: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: '100%',
    width: '100%',
    marginLeft: 10,
    fontSize: 18
  }
})

export default HomePage
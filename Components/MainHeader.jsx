import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

import { Feather } from '@expo/vector-icons';

export class MainHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnMenu}>
            <Feather name="menu" size={45} color="gray" />
        </TouchableOpacity>
            <Image style={styles.icon} resizeMode='contain' source={require('../assets/icon.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: 'transparent',
        marginBottom: 0,

    },
    btnMenu: {
        marginLeft: 5,
    },
    icon:{
        width: 110,
        marginLeft: '24%',
    }
});

export default MainHeader
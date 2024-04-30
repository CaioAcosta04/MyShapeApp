import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';

const Stack = createNativeStackNavigator();

export class LoginLayoutRoute extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{headerShown: false}} name='Login' component={Login}/>
      </Stack.Navigator>
    )
  }
}

export default LoginLayoutRoute
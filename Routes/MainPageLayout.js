import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from '../Screens/MainPage';
const Stack = createNativeStackNavigator();

export class MainPageLayout extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' options={{headerShown: false}} component={MainPage}/>
      </Stack.Navigator>
    )
  }
}

export default MainPageLayout
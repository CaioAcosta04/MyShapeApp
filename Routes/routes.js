import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from '../Screens/HomePage';
import ProfilePage from '../Screens/ProfilePage';
import AnalyticsPage from '../Screens/AnalyticsPage';

import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator 
        initialRouteName='Home'
            screenOptions={{ 
                tabBarStyle:{
                    backgroundColor: '#fff',
                    borderTopColor: 'transparent',
                    padding: 5,
                },
                tabBarActiveTintColor: '#000',
                headerShown: false
            }}
        >
            <Tab.Screen 
            name='Analytics' 
            component={AnalyticsPage}
            options={{
                tabBarIcon: ({size, color})=>(
                    <Entypo name="area-graph" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name='Home' 
            component={HomePage}
            options={{
                tabBarIcon: ({size, color})=>(
                    <MaterialIcons name='fitness-center' size={size} color={color}/>
                )
            }}
            />

            <Tab.Screen 
            name='Profile' 
            component={ProfilePage}
            options={{
                tabBarIcon: ({size, color})=>(
                    <FontAwesome name='user' size={size} color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}
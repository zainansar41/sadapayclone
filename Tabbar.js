import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Screens/Home';
import { Header } from 'react-native/Libraries/NewAppScreen';
const Tab = createBottomTabNavigator();

export default function Tabbar() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
        </Tab.Navigator>
    )
}
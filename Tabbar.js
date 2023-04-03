import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Screens/Home';
import { Header } from 'react-native/Libraries/NewAppScreen';
const Tab = createBottomTabNavigator();
import Iocicons from 'react-native-vector-icons/Ionicons';

import Payment from './Components/Payment';


export default function Tabbar() {
    return (
        <Tab.Navigator tabBarOptions={{showLabel:false}}>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 10
                    }}>
                        <Iocicons
                            name="home"
                            size={30}
                            color={focused ? 'red' : 'gray'}
                        />
                    </View>
                )

            }} />
            <Tab.Screen name="payments" component={Payment} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 10
                    }}>
                        <Iocicons
                            name="wallet"
                            size={30}
                            color={focused ? 'red' : 'gray'}
                        />
                    </View>
                )

            }} />
            <Tab.Screen name="more" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        // centring Tab Button...
                        position: 'absolute',
                        top: 10
                    }}>
                        <Iocicons
                            name="apps"
                            size={30}
                            color={focused ? 'red' : 'gray'}
                        />
                    </View>
                )

            }} />
        </Tab.Navigator>
    )
}
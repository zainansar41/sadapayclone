import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

import mastercard from '../assets/mastercard.png'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Home() {
    return (
        <ScrollView>
            <View style={styles.upper_div}>
                <View style={styles.balance_div}>

                </View>
                <View style={styles.second_div}>
                    <View style={styles.load_money}></View>
                    <View style={styles.request}></View>
                </View>
            </View>
            <View></View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    upper_div: {
        height: Dimensions.get('window').height * 0.45,
        // backgroundColor: '#CE5959',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 20,
        paddingTop: 60,
        flexDirection: 'row',
        gap: 20
    },
    balance_div: {
        width: Dimensions.get('window').width * 0.50,
        height: Dimensions.get('window').height * 0.35,
        backgroundColor: '#1F8A70',
        borderRadius: 20,
        elevation: -10,
        shadowColor: '#A9A9A9', // light grey shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    second_div: {
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width * .40,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    load_money: {
        width: Dimensions.get('window').width * 0.40,
        height: Dimensions.get('window').height * 0.16,
        backgroundColor: '#1C82AD',
        
        borderRadius: 20,
        shadowColor: '#A9A9A9', // light grey shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    request: {
        width: Dimensions.get('window').width * 0.40,
        height: Dimensions.get('window').height * 0.16,
        backgroundColor: '#CE5959',
        gap: 20,
        borderRadius: 20,
        shadowColor: '#A9A9A9', // light grey shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    }
})
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

import mastercard from '../assets/mastercard.png'
import Ionicons from 'react-native-vector-icons/Ionicons';

import BalanceDiv from '../Components/BalanceDiv';
import Loadmoney from '../Components/Loadmoney';
import Request from '../Components/Request';


export default function Home() {
    return (
        <ScrollView>
            <View style={styles.upper_div}>
                <BalanceDiv />
                <View style={styles.second_div}>
                    <Loadmoney />
                    <Request />
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
    second_div: {
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width * .40,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

})
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Loadmoney() {
  return (
    <View style={styles.load_money}>
        {/* <ion-icon name="arrow-down-outline"></ion-icon> */}
        <Ionicons name='arrow-down-outline' size={30} color={'#fff'} />
        <Text style={styles.load_money_txt}>Load Money</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    load_money: {
        width: Dimensions.get('window').width * 0.40,
        height: Dimensions.get('window').height * 0.16,
        backgroundColor: '#1C82AD',
        
        borderRadius: 20,
        shadowColor: '#A9A9A9', // light grey shadow
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        padding: 15,
        justifyContent: 'space-between',
    },
    load_money_txt:{
      fontSize: 20,
      fontWeight: '400',
      color: '#fff',
      fontStyle: 'italic',
    }

})
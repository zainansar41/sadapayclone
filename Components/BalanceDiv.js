import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'

import mastercard from '../assets/mastercard.png'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BalanceDiv() {
  return (
    <View style={styles.balance_div}>
      <View>
        <Text style={styles.bal_tag} >Current Balance</Text>
        <Text style={styles.balance}>RS 11,000</Text>
      </View>
      <View style={styles.master}>
        <Image source={mastercard} style={{ width: 60, height: 36 }} />
        {/* //<ion-icon name="arrow-forward-outline"></ion-icon> */}
        <View style={styles.arrow}><Ionicons name='arrow-forward-outline' size={30} color={'white'}/></View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
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
    paddingLeft: 20,
    paddingTop: 30,
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  bal_tag: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
  },
  balance: {
    fontSize: 24,
    fontStyle: 'italic',
    color: '#fff',
    fontWeight: '700',
    marginTop: 10
  },
  master: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginRight:10
    
  },
  arrow:{
    justifyContent:'center',
    alignItems:'center'
  }


})
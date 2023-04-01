import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
//<ion-icon name="repeat-outline"></ion-icon>

import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Request() {
  return (
    <View style={styles.request}>
      <View style={styles.icon}><Ionicons name='repeat-outline' size={40} color={'#fff'} /></View>
      <View>
        <Text style={styles.request_txt}>Load &</Text>
        <Text style={styles.request_txt}>Request</Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
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
    paddingLeft: 15,
    paddingBottom:10,
    justifyContent:'space-between'
  },
  icon:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginRight:15,
  },
  request_txt: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    fontStyle: 'italic',
  }

})
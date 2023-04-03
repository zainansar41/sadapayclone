import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TransactionDiv({ item }) {
    return (
        <View style={styles.item_div}>
            {item.status ==='send'?<Ionicons name='card' size={50} color={'#1F8A70'}/>:<Ionicons name='paper-plane' size={50} color={'#CE5959'}/>}
            <View style={styles.middle_div}>
                <Text style={styles.item_name}>{item.name}</Text>
                <Text>{item.time}</Text>
            </View>
            <View>
                <Text style={styles.item_amount}>{item.status ==='send'?`- ${item.amount}`:`+ ${item.amount}`}</Text>
            </View>
        </View>
    )
}

const styles = new StyleSheet.create({
    item_div: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap:20,
        // justifyContent:'space-between',
    },
    middle_div:{
        width:220,
    },
    item_name:{
        fontSize:20,
        fontWeight:'700'
    },
    item_amount:{
        alignSelf:'flex-end',
        fontSize:20,
        fontWeight:'700',
        right:40
    }


})
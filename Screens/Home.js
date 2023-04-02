import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, SectionList } from 'react-native'
import React from 'react'

import mastercard from '../assets/mastercard.png'
import Ionicons from 'react-native-vector-icons/Ionicons';

import BalanceDiv from '../Components/BalanceDiv';
import Loadmoney from '../Components/Loadmoney';
import Request from '../Components/Request';

import DATA from '../Help/DataList';


export default function Home() {
    return (
        <View>
            <View style={styles.upper_div}>
                <BalanceDiv />
                <View style={styles.second_div}>
                    <Loadmoney />
                    <Request />
                </View>
            </View>
            <View></View>

            <SectionList
                    sections={DATA}
                    // horizontal
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={{ fontWeight: 'bold', marginTop: 50, fontSize: 25, marginBottom: 40 }}>{title}</Text>
                    )}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) =>
                        // <TouchableOpacity style={[styles.card, { backgroundColor: pizzaclr[item.key] ? "red" : "lightgrey" }]} onPress={() => {
                        //     setpizzaclr(prevState => {
                        //         const newState = [...prevState];
                        //         newState[item.key] = !newState[item.key];
                        //         return newState;
                        //     });
                        // }}>
                        //     <Text style={styles.card_text}>{item.title}</Text>

                        // </TouchableOpacity>
                        <Text>{item.name}</Text>
                    }
                />

        </View>
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
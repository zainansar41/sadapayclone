import { View, Text, TextInput, TouchableWithoutFeedback, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome'
//<Icon name="fa-solid fa-horizontal-rule" />
export default function Login() {
    const [password, setpassword] = useState("");

    const handleInputChange = (text) => {
        if (text.length <= 5) {
            setpassword(text);
        }
    }

    const iconsArray = Array(5).fill('remove-outline');
    for (let i = 0; i < password.length; i++) {
        iconsArray[i] = 'remove-circle';
    }

    const addInPWD = (newTXT, isBackspace = false) => {
        if (isBackspace) {
            const setPWD = password.slice(0, -1);
            setpassword(setPWD);
        } else {
            const entered = String(newTXT);
            const setPWD = `${password}${entered}`;
            setpassword(setPWD);
        }
    }

    useEffect(() => {
        if (password.length === 5) {
            console.log("Password is: ", password);
        }
    }, [password])

    return (
        <ScrollView style={styles.container} contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={styles.Logo_div}><Text style={styles.sada}>Sada</Text><Text style={styles.pay}>Pay</Text></View>
            <View>
                <TextInput placeholder='abc' style={styles.input} value={password} onChangeText={handleInputChange} />
                <View style={styles.hidden}>
                    {iconsArray.map((iconName, index) => (
                        <Ionicons key={index} name={iconName} size={40} />
                    ))}
                </View>
            </View>
            <View><Text style={styles.forgotPin}>Forgot Pin?</Text></View>
            <View style={styles.keys_div}>
                <View style={styles.key_rows}>
                    <TouchableOpacity style={styles.key} onPress={() => { addInPWD(1) }}>
                        <Text style={styles.Key_txt}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.key} onPress={() => { addInPWD(2) }}>
                        <Text style={styles.Key_txt}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.key} onPress={() => { addInPWD(3) }}>
                        <Text style={styles.Key_txt}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.key_rows}>
                    <TouchableOpacity style={styles.key} onPress={() => { addInPWD(4) }}>
                        <Text style={styles.Key_txt}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.key} onPress={() => { addInPWD(5) }}>
                        <Text style={styles.Key_txt}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.key} onPress={() => { addInPWD(6) }}>
                        <Text style={styles.Key_txt}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.key_rows}>
                    <TouchableOpacity style={styles.key} onPress={() => { addInPWD(7) }}>
                        <Text style={styles.Key_txt}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.key} onPress={() => { addInPWD(8) }}>
                        <Text style={styles.Key_txt}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.key} onPress={() => { addInPWD(9) }}>
                        <Text style={styles.Key_txt}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.key_rows}>
                    <TouchableOpacity style={styles.key}>
                        <Ionicons name='finger-print' size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.key} onPress={() => { addInPWD(0) }}>
                        <Text style={styles.Key_txt}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.key} onPress={() => addInPWD('', true)}>
                        <Ionicons name='backspace' size={40} />
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        backgroundColor: '#CE5959',
    },
    Logo_div: {
        height: 120,
        marginTop: 170,
        flexDirection: 'row',
        marginBottom: 30
    },
    sada: {
        fontSize: 40,
        fontWeight: '700',
        color: '#fff'
    },
    pay: {
        fontSize: 40,
        fontWeight: '500',
        color: '#fff',
        fontStyle: 'italic'
    },
    hidden: {
        flexDirection: 'row',
        gap: 5,
        marginBottom: 80
    },
    forgotPin: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
        textAlign:'center'
    }
    ,
    input: {
        display: 'none'
    },
    keys_div: {
        // margin: 40,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 450,
        justifyContent: 'center',
        alignItems: 'center'
    },
    key_rows: {
        flexDirection: 'row',
    },
    key: {
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Key_txt: {
        fontSize: 30,
        color: '#fff'
    }
})

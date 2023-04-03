import { View, Text, StyleSheet, Modal, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Payment() {

    const [modalVisible, setModalVisible] = React.useState(false);
    const handleVisible = () => {
        setModalVisible(true)
    }
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleVisible }
        >
            <View style={styles.modal}>
                <View style={styles.modal_content}>
                    <Text style={styles.modal_text}>Hello World!</Text>
                    <TouchableOpacity onPress={handleVisible}>
                        <Text>Hide Modal</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    )
}

const styles = new StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modal_content: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.5,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal_text: {
        fontSize: 20,
        fontWeight: '700'

    }
})

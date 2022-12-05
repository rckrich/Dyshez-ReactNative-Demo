import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    Modal,
} from 'react-native'

const BottomModal = ({ modalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                // this.closeButtonFunction()
            }}
        >
            <View
                style={{
                    height: '50%',
                    marginTop: 'auto',
                    backgroundColor: 'blue',
                }}
            >
                <View>
                    <Text>This is Half Modal</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}
                >
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default BottomModal

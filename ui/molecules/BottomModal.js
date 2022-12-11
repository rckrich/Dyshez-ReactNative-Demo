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
    Pressable,
    TouchableWithoutFeedback,
} from 'react-native'
import { useFonts } from 'expo-font'

const BottomModal = ({
    modalVisible,
    setIsBottomModalVisible,
    handleMenuModal,
    handleShareModal,
}) => {
    const [loaded] = useFonts({
        PoppinsBold: require('../../assets/fonts/PoppinsBold.ttf'),
        PoppinsRegular: require('../../assets/fonts/PoppinsRegular.ttf'),
    })

    if (!loaded) {
        return null
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={setIsBottomModalVisible}
        >
            <TouchableWithoutFeedback onPress={setIsBottomModalVisible}>
                <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.title}>Opciones del restaurante</Text>
                <View style={styles.buttons}>
                    <Pressable style={styles.button} onPress={handleShareModal}>
                        <Image
                            source={require('../../assets/icons/share.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>Compartir</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={handleMenuModal}>
                        <Image
                            source={require('../../assets/icons/restaurant-menu.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>Ver menús</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        backgroundColor: '#fff',
        height: 250,
        marginTop: 'auto',
        borderRadius: 25,
        paddingHorizontal: 50,
        paddingVertical: 30,
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 30,
    },
    button: {
        height: 85,
        width: 165,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    icon: {
        height: 25,
        width: 25,
        marginBottom: 10,
    },
    title: {
        fontFamily: 'PoppinsBold',
        fontSize: 13,
    },
    text: {
        fontFamily: 'PoppinsRegular',
        fontSize: 12,
    },
})

export default BottomModal

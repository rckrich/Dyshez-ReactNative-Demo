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

const MenuModal = ({ modalVisible, handleMenuModal }) => {
    const [loaded] = useFonts({
        PoppinsMedium: require('../../assets/fonts/PoppinsMedium.ttf'),
        PoppinsRegular: require('../../assets/fonts/PoppinsRegular.ttf'),
        PoppinsBold: require('../../assets/fonts/PoppinsBold.ttf'),
    })

    if (!loaded) {
        return null
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleMenuModal}
        >
            <TouchableWithoutFeedback onPress={handleMenuModal}>
                <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.title}>Menús Disponibles</Text>
                <View>
                    <Text style={styles.header}>Menús Dyshez</Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Menú Desayunos</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Menú Comidas</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Menú Cenas</Text>
                    </Pressable>
                </View>
                <View>
                    <Text style={styles.header}>Menús Dyshez</Text>
                    <Pressable style={styles.button}>
                        <Text style={styles.text}>Ver PDF</Text>
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
        height: 420,
        marginTop: 'auto',
        borderRadius: 25,
        paddingHorizontal: 100,
        paddingVertical: 30,
        alignItems: 'center',
    },
    button: {
        height: 48,
        width: 294,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        marginVertical: 5,
    },
    icon: {
        height: 25,
        width: 25,
        marginBottom: 10,
    },
    title: {
        fontFamily: 'PoppinsBold',
        fontSize: 13,
        marginBottom: 10,
    },
    text: {
        fontFamily: 'PoppinsRegular',
        fontSize: 12,
    },
    header: {
        fontFamily: 'PoppinsMedium',
        color: '#D4145A',
        paddingLeft: 8,
        marginTop: 5,
    },
})

export default MenuModal

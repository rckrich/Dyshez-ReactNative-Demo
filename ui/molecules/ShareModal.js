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

const ShareModal = ({ modalVisible, handleShareModal }) => {
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
            onRequestClose={handleShareModal}
        >
            <TouchableWithoutFeedback onPress={handleShareModal}>
                <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <Pressable style={styles.button} onPress={handleShareModal}>
                        <Image
                            source={require('../../assets/icons/copy.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>Copiar Link</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={handleShareModal}>
                        <Image
                            source={require('../../assets/icons/report.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>Reportar</Text>
                    </Pressable>
                </View>
                <View style={styles.buttons}>
                    <Pressable style={styles.socials}>
                        <Image
                            source={require('../../assets/icons/story.png')}
                            style={{ height: 50, width: 50 }}
                        />
                    </Pressable>
                    <Pressable style={styles.socials}>
                        <Image
                            source={require('../../assets/icons/insta.png')}
                            style={{ height: 70, width: 70 }}
                        />
                    </Pressable>
                    <Pressable style={styles.socials}>
                        <Image
                            source={require('../../assets/icons/twitter.png')}
                            style={{ height: 42, width: 50 }}
                        />
                    </Pressable>
                    <Pressable style={styles.socials}>
                        <Image
                            source={require('../../assets/icons/facebook.png')}
                            style={{ height: 50, width: 50 }}
                        />
                    </Pressable>
                    <Pressable style={styles.socials}>
                        <Image
                            source={require('../../assets/icons/whats.png')}
                            style={{ height: 50, width: 50 }}
                        />
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
        height: 320,
        marginTop: 'auto',
        borderRadius: 25,
        paddingHorizontal: 100,
        paddingVertical: 30,
        alignItems: 'center',
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
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
    socials: {
        marginHorizontal: 8,
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

export default ShareModal

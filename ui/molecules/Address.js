import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Address = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/icons/location.png')}
            />
            <Text style={styles.text}>
                Calle 30, 310 A, Montebello, Mérida, México
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
        paddingLeft: 16,
    },
    image: {
        width: 25,
        height: 25,
    },
    text: {
        fontSize: 13,
        color: '#606368',
    },
})

export default Address

import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Address = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/icons/location.png')}
            />
            <Text>Calle 30, 310 A, Montebello, Mérida, México</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
    },
    image: {
        width: 25,
        height: 25,
    },
})

export default Address

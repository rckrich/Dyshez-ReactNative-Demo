import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import RestaurantIcons from './RestaurantIcons'

const Info = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Bostons Pizza</Text>
            <Text>12:00 - 01:00</Text>
            <RestaurantIcons />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontWeight: '800',
    },
})

export default Info

import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import RestaurantIcons from './RestaurantIcons'

const Info = ({ name, schedule, handleShowDescription, handleShowModal }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text>{schedule}</Text>
            <RestaurantIcons
                handleShowDescription={handleShowDescription}
                handleShowModal={handleShowModal}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingRight: 0,
        paddingLeft: 20,
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

import React from 'react'
import { Text, View, Image, StyleSheet, Button } from 'react-native'
import Info from '../molecules/Info'

const RestaurantHeader = ({
    name,
    logo,
    schedule,
    handleShowDescription,
    handleShowModal,
}) => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Info
                name={name}
                schedule={schedule}
                handleShowDescription={handleShowDescription}
                handleShowModal={handleShowModal}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 30,
        color: '#d5145a',
    },
    logo: {
        width: 102,
        height: 102,
        borderRadius: 50,
    },
})

export default RestaurantHeader

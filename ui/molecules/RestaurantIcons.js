import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const RestaurantIcons = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={require('../../assets/icons/location.png')}
            />
            <Image
                style={styles.icon}
                source={require('../../assets/icons/plus.png')}
            />
            <Image
                style={styles.icon}
                source={require('../../assets/icons/restaurant-menu.png')}
            />
            <Image
                style={styles.icon}
                source={require('../../assets/icons/heart.png')}
            />
            <Image
                style={styles.finalIcon}
                source={require('../../assets/icons/share.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        flexDirection: 'row',
    },
    icon: {
        marginHorizontal: 10,
        height: 22,
        width: 22,
    },
    finalIcon: {
        marginRight: 0,
        marginLeft: 10,
        height: 22,
        width: 22,
    },
})

export default RestaurantIcons

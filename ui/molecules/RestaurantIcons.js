import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    ImageBackground,
    Linking,
} from 'react-native'

const rocaMap =
    'https://www.google.com/maps/place/ROCA+Steakhouse/@21.0292069,-89.6061696,17z/data=!3m1!4b1!4m5!3m4!1s0x8f56776bfa1f9265:0xd3fc4433aa0e407a!8m2!3d21.0292019!4d-89.6035893'

const RestaurantIcons = ({ handleShowDescription, handleShowModal }) => {
    const handleLocationClick = () => {
        Linking.openURL(rocaMap)
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight
                underlayColor="transparent"
                style={styles.touchable}
                onPress={() => handleLocationClick()}
            >
                <Image
                    style={styles.icon}
                    source={require('../../assets/icons/location.png')}
                />
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="transparent"
                style={styles.touchable}
                onPress={handleShowDescription}
            >
                <Image
                    style={styles.icon}
                    source={require('../../assets/icons/plus.png')}
                />
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="transparent"
                style={styles.touchable}
                onPress={() => alert('WIP')}
            >
                <Image
                    style={{ marginHorizontal: 5, height: 24, width: 20 }}
                    source={require('../../assets/icons/reservation.png')}
                />
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="transparent"
                style={styles.touchable}
                onPress={() => alert('WIP')}
            >
                <Image
                    style={styles.icon}
                    source={require('../../assets/icons/heart.png')}
                />
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="transparent"
                style={styles.touchable}
                onPress={handleShowModal}
            >
                <Image
                    style={styles.finalIcon}
                    source={require('../../assets/icons/more.png')}
                />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        flexDirection: 'row',
    },
    finalIcon: {
        marginRight: 0,
        marginLeft: 1,
        height: 22,
        width: 22,
    },
    icon: {
        width: 22,
        height: 22,
        marginHorizontal: 5,
    },
    touchable: {
        marginHorizontal: 2,
    },
})

export default RestaurantIcons

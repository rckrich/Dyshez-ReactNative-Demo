import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Button } from 'react-native'
import { useFonts } from 'expo-font'

const RestaurantDetails = ({ description, address, schedule, phone, url }) => {
    const [isFullText, setIsFullText] = useState(false)
    const [isFullSchedule, setIsFullSchedule] = useState(false)

    const toggleNumberOfLines = () => {
        setIsFullText(!isFullText)
    }

    const showFullSchedule = () => {
        setIsFullSchedule(!isFullSchedule)
    }

    const [loaded] = useFonts({
        MontserratMedium: require('../../assets/fonts/MontserratMedium.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image
                    source={require('../../assets/icons/list.png')}
                    style={styles.icon}
                />
                <Text
                    numberOfLines={isFullText ? 5 : 2}
                    style={styles.textLong}
                >
                    {description}
                </Text>
                <Text
                    onPress={() => toggleNumberOfLines()}
                    style={{ color: '#d5145a' }}
                >
                    {isFullText ? '▲' : '▼'}
                </Text>
            </View>
            <View style={styles.row}>
                <Image
                    source={require('../../assets/icons/direction.png')}
                    style={{ width: 20, height: 23, marginRight: 10 }}
                />
                <Text style={styles.text}>{address}</Text>
            </View>
            <View style={styles.row}>
                <Image
                    source={require('../../assets/icons/pinkclock.png')}
                    style={styles.icon}
                />

                {!isFullSchedule ? (
                    <>
                        <Text style={styles.textOpen}>Abierto. </Text>
                        <Text numberOfLines={2} style={styles.text}>
                            {schedule}
                        </Text>
                    </>
                ) : (
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text}>Lunes: Cerrado</Text>
                        <Text style={styles.text}>Martes: 13:00 - 23:30</Text>
                        <Text style={styles.text}>
                            Miércoles: 13:00 - 23:30
                        </Text>
                        <Text style={styles.text}>Jueves: 13:00 - 02:00</Text>
                        <Text style={styles.text}>Viernes: 13:00 - 02:00</Text>
                        <Text style={styles.text}>Sábado: 13:00 - 02:00</Text>
                        <Text style={styles.text}>Domingo: 13:00 - 22:00</Text>
                    </View>
                )}

                <Text
                    onPress={() => showFullSchedule()}
                    style={{ color: '#d5145a', marginLeft: 5 }}
                >
                    {isFullSchedule ? '▲' : '▼'}
                </Text>
            </View>
            <View style={styles.row}>
                <Image
                    source={require('../../assets/icons/pinkphone.png')}
                    style={styles.icon}
                />
                <Text numberOfLines={2} style={styles.text}>
                    {phone}
                </Text>
            </View>
            <View style={styles.row}>
                <Image
                    source={require('../../assets/icons/web.png')}
                    style={styles.icon}
                />
                <Text numberOfLines={2} style={styles.text}>
                    {url}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 5,
        paddingLeft: 20,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    text: {
        maxWidth: 320,
        fontFamily: 'MontserratMedium',
        fontSize: 12,
        color: '#333333',
    },
    textLong: {
        maxWidth: 310,
        fontFamily: 'MontserratMedium',
        fontSize: 12,
        color: '#333333',
    },
    textOpen: {
        maxWidth: 320,
        fontFamily: 'MontserratMedium',
        fontSize: 12,
        color: 'green',
    },
})

export default RestaurantDetails

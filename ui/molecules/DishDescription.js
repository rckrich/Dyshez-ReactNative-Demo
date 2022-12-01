import React from 'react'
import { Dimensions, Text, View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'

const DishDescription = ({ name, description }) => {
    const [loaded] = useFonts({
        PoppinsSemiBold: require('../../assets/fonts/PoppinsSemiBold.ttf'),
        PoppinsLight: require('../../assets/fonts/PoppinsLight.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text numberOfLines={3} style={styles.description}>
                {description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        heigth: 100,
        marginVertical: 50,
        paddingHorizontal: 30,
    },
    name: {
        fontSize: 18,
        fontFamily: 'PoppinsSemiBold',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        fontFamily: 'PoppinsLight',
    },
})

export default DishDescription

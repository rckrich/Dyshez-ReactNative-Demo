import React from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import Images from '../utils/imagesIndex'

const imageSelect = (id) => {
    if (id === null) return Images.restaurants.other

    const imageArray = {
        bostons: Images.restaurants.bostons,
        pizzahut: Images.restaurants.pizzahut,
        dominos: Images.restaurants.dominos,
        mcdonalds: Images.restaurants.mcdonalds,
        roca: Images.restaurants.roca,
        pizzapepperoni: Images.dishes.pizzapepperoni,
        pizzaburguer: Images.dishes.pizzaburguer,
        burguer: Images.dishes.pizzaburguer,
        burro: Images.dishes.burro,
        torta: Images.dishes.torta,
        profile1: Images.profiles.profile1,
        profile2: Images.profiles.profile2,
        profile3: Images.profiles.profile3,
        profile4: Images.profiles.profile4,
        profile5: Images.profiles.profile5,
    }

    return imageArray[id]
}

const Item = ({ name, type, id }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={imageSelect(id)} />
            <Text style={styles.text}>{name}</Text>
            <Text>{type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 100,
        margin: 5,
        width: '90%',
        borderColor: '#f6f6f6',
        borderWidth: 1,
    },
    text: {
        color: '#000',
        fontSize: 24,
    },
    logo: {
        width: 50,
        height: 50,
    },
})

export default Item

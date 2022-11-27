import React from 'react'
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import Images from '../utils/imagesIndex'
import { useFonts } from 'expo-font'

const imageSelect = (id) => {
    if (id === null) return Images.restaurants.other

    const imageArray = {
        barrioregio: Images.restaurants.barrioregio,
        fridays: Images.restaurants.fridays,
        fuddruckers: Images.restaurants.fuddruckers,
        ilpiattino: Images.restaurants.ilpiattino,
        okana: Images.restaurants.okana,
        orsons: Images.restaurants.orsons,
        roca: Images.restaurants.roca,
        siqueff: Images.restaurants.siqueff,
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
    const [loaded] = useFonts({
        PoppinsMedium: require('../assets/fonts/PoppinsMedium.ttf'),
        PoppinsLight: require('../assets/fonts/PoppinsLight.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <View style={styles.container}>
            <Image
                // style={styles.logo}
                source={imageSelect(id)}
                style={{
                    borderRadius: type !== 'Platillo' ? 50 : 11,
                    height: 47,
                    width: 47,
                }}
            />
            <View styles={styles.labels}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.type}>{type}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 60,
        marginVertical: 5,
        width: '100%',
        paddingHorizontal: 15,
        borderColor: '#f6f6f6',
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 15,
    },
    name: {
        color: '#000',
        fontSize: 12,
        marginLeft: 10,
        fontWeight: '600',
        fontFamily: 'PoppinsMedium',
    },
    type: {
        fontSize: 9,
        marginLeft: 10,
        color: '#7f7f7f',
        fontFamily: 'PoppinsLight',
    },
    labels: {
        flexDirection: 'column',
    },
})

export default Item

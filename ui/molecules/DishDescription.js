import React from 'react'
import { Dimensions, Text, View, StyleSheet, Image } from 'react-native'
import { useFonts } from 'expo-font'

const DishDescription = ({ name, description, price, callories }) => {
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
            <View style={styles.detailsWrapper}>
                <View style={styles.item}>
                    <Image
                        style={{ width: 30, height: 30, marginLeft: 15 }}
                        source={require('../../assets/icons/spiciest.png')}
                    />
                </View>
                <View style={styles.item}>
                    <Image
                        style={{ width: 60, height: 60 }}
                        source={require('../../assets/icons/keto.png')}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.price}>${price.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.detailsWrapper}>
                <View style={styles.item}>
                    <Image
                        style={{ width: 60, height: 50 }}
                        source={require('../../assets/icons/glutenfree.png')}
                    />
                </View>
                <View style={styles.item}>
                    <Image
                        style={{ width: 70, height: 50, marginRight: 23 }}
                        source={require('../../assets/icons/vegan.png')}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={styles.callories}>{callories} Kcal</Text>
                </View>
            </View>
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
        marginBottom: 20,
    },
    detailsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    price: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 18,
        textAlign: 'right',
    },
    item: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    callories: {
        fontSize: 14,
        textAlign: 'right',
        fontFamily: 'PoppinsSemiBold',
        color: '#666666',
    },
})

export default DishDescription

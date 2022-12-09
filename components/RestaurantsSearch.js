import React, { useState } from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableHighlight,
} from 'react-native'
import Images from '../utils/imagesIndex'
import { useNavigation } from '@react-navigation/native'
import Restaurant from '../pages/Restaurant'
import { getRestaurants } from '../utils/restaurantsData'

const restaurants = getRestaurants()

const RestaurantCard = ({ logoUrl, id, isActive }) => {
    const navigation = useNavigation()
    const handleClick = (id) => {
        if (isActive) {
            navigation.navigate('Restaurant', { id: id })
        } else {
            alert('Whoops! Has llegado al final del demo')
        }
    }

    return (
        <TouchableHighlight
            style={styles.touchable}
            onPress={() => handleClick(id)}
        >
            <View style={styles.card}>
                <ImageBackground
                    source={logoUrl}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <Text></Text>
                </ImageBackground>
            </View>
        </TouchableHighlight>
    )
}

const RestaurantsSearch = () => {
    const renderItem = ({ item }) => (
        <RestaurantCard
            logoUrl={item.logoUrl}
            id={item.id}
            isActive={item.isActive}
        />
    )

    return (
        <FlatList
            style={styles.container}
            data={restaurants}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{ height: 100 }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
        height: 150,
        borderRadius: 15,
    },
    touchable: {
        width: '50%',
        padding: 2,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})

export default RestaurantsSearch

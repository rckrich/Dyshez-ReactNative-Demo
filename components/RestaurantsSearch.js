import React from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
} from 'react-native'
import Images from '../utils/imagesIndex'

const DATA = [
    {
        id: Images.restaurants.roca,
    },
    {
        id: Images.restaurants.roca,
    },
    {
        id: Images.restaurants.roca,
    },
    {
        id: Images.restaurants.roca,
    },
    {
        id: Images.restaurants.roca,
    },
    {
        id: Images.restaurants.roca,
    },
    {
        id: Images.restaurants.roca,
    },
    {
        id: Images.restaurants.roca,
    },
]

const RestaurantCard = ({ id }) => (
    <View style={styles.card}>
        <Image source={id} resizeMode="contain" />
    </View>
)

const RestaurantsSearch = () => {
    const renderItem = ({ item }) => <RestaurantCard id={item.id} />

    return (
        <FlatList
            style={styles.container}
            data={DATA}
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
        backgroundColor: 'orange',
        position: 'relative',
        margin: 5,
        height: 150,
        borderRadius: 15,
    },
    image: {
        flex: 1,
        maxHeight: '100%',
        width: '100%',
    },
})

export default RestaurantsSearch

import React from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
} from 'react-native'
import Images from '../../utils/imagesIndex'

const DATA = [
    {
        id: Images.restaurants.barrioregio,
    },
    {
        id: Images.restaurants.fridays,
    },
    {
        id: Images.restaurants.fuddruckers,
    },
    {
        id: Images.restaurants.ilpiattino,
    },
    {
        id: Images.restaurants.okana,
    },
    {
        id: Images.restaurants.orsons,
    },
    {
        id: Images.restaurants.okana,
    },
    {
        id: Images.restaurants.roca,
    },
    {
        id: Images.restaurants.siqueff,
    },
    {
        id: Images.restaurants.barrioregio,
    },
    {
        id: Images.restaurants.fridays,
    },
    {
        id: Images.restaurants.fuddruckers,
    },
    {
        id: Images.restaurants.ilpiattino,
    },
    {
        id: Images.restaurants.okana,
    },
    {
        id: Images.restaurants.orsons,
    },
    {
        id: Images.restaurants.roca,
    },
    {
        id: Images.restaurants.siqueff,
    },
    {
        id: Images.restaurants.roca,
    },
]

const RestaurantCard = ({ id }) => (
    <View style={styles.card}>
        <Image source={id} resizeMode="cover" />
    </View>
)

const FeedCards = () => {
    const renderItem = ({ item }) => <RestaurantCard id={item.id} />

    return (
        <FlatList
            style={styles.container}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{ height: 30 }}
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
        margin: 1,
        height: 130,
    },
    image: {
        flex: 1,
        maxHeight: '100%',
        width: '100%',
    },
})

export default FeedCards

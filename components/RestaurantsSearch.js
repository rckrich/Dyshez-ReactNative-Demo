import React from 'react'
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

const DATA = [
    {
        id: Images.restaurants.roca,
    },
    {
        id: Images.restaurants.siqueff,
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
        id: Images.restaurants.fuddruckers,
    },
    {
        id: Images.restaurants.barrioregio,
    },
    {
        id: Images.restaurants.fridays,
    },
    {
        id: Images.restaurants.bostons,
    },
    {
        id: Images.restaurants.laparroquia,
    },
]

const RestaurantCard = ({ id }) => {
    const navigation = useNavigation()
    return (
        <TouchableHighlight
            style={styles.touchable}
            onPress={() => navigation.navigate(Restaurant, { id: id })}
        >
            <View style={styles.card}>
                <ImageBackground
                    source={id}
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
})

export default RestaurantsSearch

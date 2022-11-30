import React from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    Pressable,
} from 'react-native'
import { getMenu } from '../../utils/dishesData'
import { useFonts } from 'expo-font'

const ListCards = ({ id }) => {
    const dishes = getMenu(id)

    const [loaded] = useFonts({
        PoppinsSemiBold: require('../../assets/fonts/PoppinsSemiBold.ttf'),
        PoppinsMedium: require('../../assets/fonts/PoppinsMedium.ttf'),
    })

    if (!loaded) {
        return null
    }

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.info}>
                <Text style={styles.description} numberOfLines={2}>
                    {item.description}
                </Text>
                <Image
                    style={styles.image}
                    source={require('../../assets/icons/back.png')}
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.callories}>430 cal</Text>
                <Text style={styles.price}>$150.50</Text>
            </View>
        </View>
    )

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={dishes}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{ height: 50 }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    card: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    info: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
        fontFamily: 'PoppinsSemiBold',
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        width: '88%',
        textAlign: 'center',
        fontFamily: 'PoppinsMedium',
        color: '#a1a1a1',
        justifyContent: 'center',
    },
    image: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        paddingLeft: 5,
    },
    wrapperIcons: {
        flexDirection: 'row',
        width: '55%',
        alignItems: 'center',
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
        width: 300,
        borderBottomWidth: 2,
        borderBottomColor: '#a1a1a1',
    },
    callories: {
        marginHorizontal: 10,
        fontFamily: 'PoppinsMedium',
        fontSize: 12,
    },
    price: {
        fontFamily: 'PoppinsMedium',
        fontSize: 12,
    },
})

export default ListCards

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
    TouchableHighlight,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { getMenu } from '../../utils/dishesData'
import { useFonts } from 'expo-font'

const ListCards = ({ id }) => {
    const navigation = useNavigation()
    const dishes = getMenu(id)

    const [loaded] = useFonts({
        PoppinsSemiBoldItalic: require('../../assets/fonts/PoppinsSemiBoldItalic.ttf'),
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
                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => navigation.navigate('Dish', { id: item.id })}
                >
                    <Image
                        style={styles.image}
                        source={require('../../assets/icons/next.png')}
                    />
                </TouchableHighlight>
            </View>
            <View style={styles.details}>
                <Text style={styles.callories}>{item.callories} KCal</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
        </View>
    )

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={dishes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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
        fontFamily: 'PoppinsSemiBoldItalic',
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        width: '87%',
        textAlign: 'center',
        fontFamily: 'PoppinsMedium',
        color: '#a1a1a1',
        justifyContent: 'center',
    },
    image: {
        width: 25,
        height: 25,
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
        borderBottomColor: '#dddddd',
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

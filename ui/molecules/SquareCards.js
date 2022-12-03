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
import { getMenu } from '../../utils/dishesData'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import Dish from '../../pages/Dish'

const SquareCards = ({ id }) => {
    const navigation = useNavigation()
    const dishes = getMenu(id)

    const [loaded] = useFonts({
        PoppinsRegular: require('../../assets/fonts/PoppinsRegular.ttf'),
    })

    if (!loaded) {
        return null
    }

    const renderItem = ({ item }) => (
        <TouchableHighlight
            style={styles.card}
            onPress={() => navigation.navigate('Dish', { id: item.id })}
        >
            <ImageBackground
                source={item.imageUrl}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.wrapperTitle}>
                    <Text numberOfLines={1} style={styles.text}>
                        {item.name}
                    </Text>
                </View>
                <View style={styles.wrapperPrice}>
                    <Text style={styles.text}>${item.price.toFixed(2)}</Text>
                </View>
            </ImageBackground>
        </TouchableHighlight>
    )

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={dishes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{ height: 100 }}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
        margin: 1,
        height: 194,
        maxWidth: '49%',
    },
    wrapperTitle: {
        backgroundColor: '#000',
        color: '#fff',
        maxWidth: '100%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        paddingHorizontal: 5,
        height: 15,
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 32,
    },
    wrapperPrice: {
        backgroundColor: '#000',
        color: '#fff',
        maxWidth: '100%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 15,
        paddingHorizontal: 5,
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 15,
    },
    text: {
        fontSize: 10,
        fontFamily: 'PoppinsRegular',
        color: '#fff',
        maxWidth: 200,
    },
})

export default SquareCards

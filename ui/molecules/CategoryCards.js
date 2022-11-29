import React from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    ImageBackground,
} from 'react-native'
import { getMenuCategories } from '../../utils/dishesData'
import { useFonts } from 'expo-font'

const RestaurantCard = ({ category, imageUrl }) => (
    <View style={styles.card}>
        <ImageBackground
            source={imageUrl}
            resizeMode="cover"
            style={styles.image}
        >
            <View style={styles.wrapper}>
                <Text style={styles.text}>{category}</Text>
            </View>
        </ImageBackground>
    </View>
)

const CategoryCards = ({ id }) => {
    const [loaded] = useFonts({
        PoppinsMedium: require('../../assets/fonts/PoppinsMedium.ttf'),
    })

    if (!loaded) {
        return null
    }

    const renderItem = ({ item }) => (
        <RestaurantCard category={item.category} imageUrl={item.imageUrl} />
    )
    const categories = getMenuCategories(id)

    return (
        <FlatList
            style={styles.container}
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            numColumns={3}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{ height: 30 }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 2,
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
        margin: 1,
        height: 140,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    wrapper: {
        backgroundColor: '#fff',
        color: '#000',
        maxWidth: '70%',
        marginTop: '50%',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        minHeight: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        fontFamily: 'PoppinsMedium',
    },
})

export default CategoryCards

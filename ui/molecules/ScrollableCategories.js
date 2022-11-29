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
import { getMenuCategories } from '../../utils/dishesData'
import { useFonts } from 'expo-font'

const ScrollableCategories = ({ id }) => {
    const categories = getMenuCategories(id)

    const renderItem = ({ item }) => (
        <Pressable style={styles.button}>
            <Text style={styles.text}>{item.category}</Text>
        </Pressable>
    )

    const [loaded] = useFonts({
        PoppinsSemiBold: require('../../assets/fonts/PoppinsSemiBold.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            horizontal
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 60,
        alignItems: 'center',
    },
    button: {
        borderColor: '#000',
        borderWidth: 1,
        marginHorizontal: 5,
        padding: 8,
        borderRadius: 10,
    },
    text: {
        fontSize: 12,
        fontFamily: 'PoppinsSemiBold',
    },
})

export default ScrollableCategories

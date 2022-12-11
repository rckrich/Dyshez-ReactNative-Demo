import React, { useState } from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    Pressable,
    ScrollView,
} from 'react-native'
import { getMenuCategories } from '../../utils/dishesData'
import { useFonts } from 'expo-font'
import { filterMenu } from '../../utils/dishesData'

const ScrollableCategories = ({
    id,
    handleCategorySelect,
    categorySelected,
}) => {
    const categories = getMenuCategories(id)

    const renderItem = ({ item }) => (
        <View>
            <Pressable
                style={
                    categorySelected !== item.category
                        ? styles.button
                        : styles.buttonBlack
                }
                onPress={() => handleCategorySelect(item.category)}
            >
                <Text
                    style={
                        categorySelected !== item.category
                            ? styles.text
                            : styles.textWhite
                    }
                >
                    {item.category}
                </Text>
            </Pressable>
        </View>
    )

    const [loaded] = useFonts({
        PoppinsSemiBold: require('../../assets/fonts/PoppinsSemiBold.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <View>
            <FlatList
                contentContainerStyle={styles.container}
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                horizontal
            />
        </View>
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
        borderRadius: 10,
        height: 38,
        paddingHorizontal: 4,
        justifyContent: 'center',
    },
    buttonBlack: {
        backgroundColor: '#000',
        borderWidth: 1,
        marginHorizontal: 5,
        borderRadius: 10,
        paddingHorizontal: 4,
        justifyContent: 'center',
        height: 38,
    },
    text: {
        fontSize: 14,
        fontFamily: 'PoppinsSemiBold',
    },
    textWhite: {
        fontSize: 14,
        fontFamily: 'PoppinsSemiBold',
        color: '#fff',
    },
})

export default ScrollableCategories

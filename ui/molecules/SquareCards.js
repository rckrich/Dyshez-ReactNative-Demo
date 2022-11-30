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

const SquareCards = ({ id }) => {
    const dishes = getMenu(id)

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <ImageBackground
                source={item.imageUrl}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.wrapper}>
                    <Text style={styles.text}>
                        {item.name} ${item.price.toFixed(2)}
                    </Text>
                </View>
            </ImageBackground>
        </View>
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
        height: 180,
        maxWidth: '49%',
    },
    wrapper: {
        backgroundColor: '#000',
        color: '#fff',
        maxWidth: '100%',
        padding: 5,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        minHeight: 25,
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 15,
    },
    text: {
        fontSize: 10,
        fontFamily: 'PoppinsMedium',
        color: '#fff',
        maxWidth: 200,
    },
})

export default SquareCards

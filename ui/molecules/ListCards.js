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

const ListCards = ({ id }) => {
    const dishes = getMenu(id)

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.info}>
                <Text style={styles.description} numberOfLines={2}>
                    {item.description}
                </Text>
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'contain',
                    }}
                    source={require('../../assets/icons/back.png')}
                />
            </View>
        </View>
    )

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={dishes}
            renderItem={renderItem}
            keyExtractor={(item) => item}
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
    },
    description: {
        fontSize: 12,
        width: '90%',
        textAlign: 'center',
    },
})

export default ListCards

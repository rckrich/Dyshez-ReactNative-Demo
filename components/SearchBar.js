import React, { useState } from 'react'
import {
    StyleSheet,
    TextInput,
    View,
    Keyboard,
    Button,
    Text,
    Image,
    Pressable,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Item from './Item'
import { searchResponse } from '../utils/restaurantsData'
import RestaurantsSearch from './RestaurantsSearch'
import Address from '../ui/molecules/Address'
import { useFonts } from 'expo-font'

const SearchBar = ({ isHome }) => {
    const [searchLabel, setSearchLabel] = useState('')

    function filterList(list) {
        return list.filter((listItem) =>
            listItem.name.toLowerCase().includes(searchLabel.toLowerCase())
        )
    }

    const [loaded] = useFonts({
        PoppinsSemiBold: require('../assets/fonts/PoppinsSemiBold.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <View style={{ paddingHorizontal: !isHome ? 8 : 0 }}>
            <View style={styles.searchSection}>
                <TextInput
                    onChangeText={(search) => setSearchLabel(search)}
                    style={styles.input}
                    placeholder="Buscar"
                />

                <Image
                    style={styles.icon}
                    source={require('../assets/icons/search.png')}
                />
            </View>

            {searchLabel !== '' && (
                <View>
                    {filterList(searchResponse).map((restaurant, index) => (
                        <Item
                            key={index}
                            name={restaurant.name}
                            type={restaurant.type}
                            id={restaurant.id}
                        />
                    ))}
                    <Pressable style={styles.wrapper}>
                        <Text style={styles.text}>
                            Ver todos los resultados
                        </Text>
                    </Pressable>
                </View>
            )}
        </View>
    )
}
export default SearchBar

// styles
const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f4f6',
        width: '100%',
        borderRadius: 50,
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#f2f4f6',
        borderRadius: 50,
        width: '90%',
        paddingHorizontal: 15,
        fontSize: 18,
        height: 37,
        paddingLeft: 25,
    },
    icon: {
        width: 15,
        height: 15,
    },
    title: {
        fontWeight: '900',
        fontSize: 20,
    },
    wrapper: {
        borderWidth: 1,
        borderRadius: 15,
        height: 60,
        borderColor: '#f6f6f6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000',
        fontFamily: 'PoppinsSemiBold',
        fontSize: 12,
    },
})

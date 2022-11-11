import React, { useState } from 'react'
import {
    StyleSheet,
    TextInput,
    View,
    Keyboard,
    Button,
    Text,
    Image,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Item from './Item'
import { restaurants } from '../utils/restaurantsData'

const SearchBar = () => {
    const [searchLabel, setSearchLabel] = useState('')

    function filterList(list) {
        return list.filter((listItem) =>
            listItem.toLowerCase().includes(searchLabel.toLowerCase())
        )
    }

    return (
        <>
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
                    {filterList(restaurants).map((restaurant, index) => (
                        <Item key={index} name={restaurant} />
                    ))}
                </View>
            )}
        </>
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
    },
    input: {
        backgroundColor: '#f2f4f6',
        borderRadius: 50,
        width: '90%',
        padding: 15,
        fontSize: 18,
    },
    icon: {
        width: 15,
        height: 15,
    },
})

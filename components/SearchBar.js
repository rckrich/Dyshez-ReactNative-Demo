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

const list = ['Dua Lipa', 'The weekend', 'Jose Jose']

const SearchBar = () => {
    const [searchLabel, setSearchLabel] = useState('')

    function filterList(list) {
        return list.filter((listItem) =>
            listItem.toLowerCase().includes(searchLabel.toLowerCase())
        )
    }

    return (
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

            {/* 
          
            {searchLabel !== '' &&
                filterList(list).map((listItem, index) => (
                    <Item key={index} name={listItem} />
                ))} */}
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
    },
    input: {
        backgroundColor: '#f2f4f6',
        // height: 50,
        borderRadius: 50,
        width: '90%',
        padding: 20,
        fontSize: 18,
    },
    icon: {
        width: 15,
        height: 15,
    },
})

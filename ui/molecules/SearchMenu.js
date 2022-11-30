import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import SquareCards from './SquareCards'
import SearchBar from '../../components/SearchBar'

const SearchMenu = ({ id }) => {
    return (
        <View>
            <View style={styles.container}>
                <SearchBar />
            </View>
            <SquareCards id={id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        backgroundColor: '#fff',
    },
})

export default SearchMenu

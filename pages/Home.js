import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native'
import SearchBar from '../components/SearchBar'
import Address from '../ui/molecules/Address'
import RestaurantsSearch from '../components/RestaurantsSearch'
import { useFonts } from 'expo-font'

function Home() {
    const [loaded] = useFonts({
        PoppinsSemiBold: require('../assets/fonts/PoppinsSemiBold.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <View style={styles.searchContainer}>
            <SearchBar />
            <Address />
            <Text style={styles.title}>Restaurantes Cercanos</Text>
            <RestaurantsSearch />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#fff',
        padding: 14,
        paddingHorizontal: 8,
    },
    title: {
        fontWeight: '700',
        fontSize: 19,
        paddingLeft: 22,
        fontFamily: 'PoppinsSemiBold',
    },
})

export default Home

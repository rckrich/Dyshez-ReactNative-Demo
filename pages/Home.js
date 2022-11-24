import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native'
import SearchBar from '../components/SearchBar'
import Address from '../ui/molecules/Address'
import RestaurantsSearch from '../components/RestaurantsSearch'

function Home() {
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
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
    },
    searchContainer: {
        backgroundColor: '#fff',
        padding: 14,
        paddingHorizontal: 8,
    },
    title: {
        fontWeight: '700',
        fontSize: 19,
        paddingLeft: 22,
    },
})

export default Home

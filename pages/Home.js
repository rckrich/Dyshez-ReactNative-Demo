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
    },
    title: {
        fontWeight: '900',
        fontSize: 20,
    },
})

export default Home

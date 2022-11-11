import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native'
import SearchBar from '../components/SearchBar'

function Home() {
    return (
        <>
            <View style={styles.searchContainer}>
                <SearchBar />
            </View>
            <View style={styles.container}>
                <Image
                    source={require('../assets/icons/home.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}>Home</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#f6f6f6',
    },
    searchContainer: {
        height: 80,
        backgroundColor: '#fff',
        padding: 14,
    },
    title: {
        width: '100%',
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '10%',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 30,
        color: '#d5145a',
    },
})

export default Home

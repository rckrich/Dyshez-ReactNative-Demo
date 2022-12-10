import React from 'react'
import { Text, View, Image, StyleSheet, Button } from 'react-native'
import SearchBar from '../components/SearchBar'
import Address from '../ui/molecules/Address'
import FeedTabs from '../ui/molecules/FeedTabs'

const AllResults = () => {
    return (
        <View style={styles.searchContainer}>
            <SearchBar />
            <Address />
            <FeedTabs />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 0,
        height: '110%',
    },
})

export default AllResults

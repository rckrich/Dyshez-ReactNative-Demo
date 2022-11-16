import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native'
import SearchBar from '../components/SearchBar'
import Address from '../ui/molecules/Address'
import RestaurantsSearch from '../components/RestaurantsSearch'
import ProfileTabs from '../ui/molecules/ProfileTabs'

function Profile() {
    return (
        <View style={styles.searchContainer}>
            <ProfileTabs />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 0,
        height: '100%',
    },
})

export default Profile

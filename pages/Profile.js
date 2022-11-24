import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native'
import SearchBar from '../components/SearchBar'
import Address from '../ui/molecules/Address'
import RestaurantsSearch from '../components/RestaurantsSearch'
import ProfileTabs from '../ui/molecules/ProfileTabs'
import ProfileHeader from '../ui/molecules/ProfileHeader'
import Badges from '../ui/molecules/Badges'

function Profile() {
    return (
        <View style={styles.searchContainer}>
            <ProfileHeader />
            <Badges />
            <ProfileTabs />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 0,
        height: '110%',
        flexDirection: 'column',
    },
})

export default Profile

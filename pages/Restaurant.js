import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import RestaurantHeader from '../ui/molecules/RestaurantHeader'
import RestaurantTabs from '../ui/molecules/RestaurantTabs'
import BottomTab from '../components/BottomTab'

function Restaurant() {
    return (
        <View style={styles.container}>
            <RestaurantHeader />
            <RestaurantTabs />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
})

export default Restaurant

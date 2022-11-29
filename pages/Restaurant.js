import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import RestaurantHeader from '../ui/molecules/RestaurantHeader'
import RestaurantTabs from '../ui/molecules/RestaurantTabs'
import BottomTab from '../components/BottomTab'
import { useNavigation } from '@react-navigation/native'

const Restaurant = ({ route }) => {
    console.log(route)
    return (
        <View style={styles.container}>
            <Text>{route.params.id}</Text>
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

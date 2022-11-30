import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import RestaurantHeader from '../ui/molecules/RestaurantHeader'
import RestaurantTabs from '../ui/molecules/RestaurantTabs'
import BottomTab from '../components/BottomTab'
import { useNavigation } from '@react-navigation/native'
import { getRestaurant } from '../utils/restaurantsData'

const Restaurant = ({ route }) => {
    const restaurant = getRestaurant(route.params.id)

    return (
        <View style={styles.container}>
            <RestaurantHeader
                name={restaurant.name}
                logo={restaurant.logoUrl}
                schedule={restaurant.schedule}
            />
            <RestaurantTabs id={restaurant.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
})

export default Restaurant

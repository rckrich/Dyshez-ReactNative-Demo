import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Button } from 'react-native'
import RestaurantHeader from '../ui/molecules/RestaurantHeader'
import RestaurantTabs from '../ui/molecules/RestaurantTabs'
import BottomTab from '../components/BottomTab'
import { useNavigation } from '@react-navigation/native'
import { getRestaurant } from '../utils/restaurantsData'
import RestaurantDetails from '../ui/molecules/RestaurantDetails'
import BottomModal from '../ui/molecules/BottomModal'
import MenuModal from '../ui/molecules/MenuModal'

const Restaurant = ({ route }) => {
    const restaurant = getRestaurant(route.params.id)
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
    const [isBottomModalVisible, setIsBottomModalVisible] = useState(false)
    const [isMenuModalVisible, setIsMenuModalVisible] = useState(false)
    const handleShowDescription = () => {
        setIsDescriptionOpen(!isDescriptionOpen)
    }

    const handleShowModal = () => {
        setIsBottomModalVisible(!isBottomModalVisible)
    }

    const handleMenuModal = () => {
        setIsBottomModalVisible(false)
        setIsMenuModalVisible(!isMenuModalVisible)
    }

    return (
        <View style={styles.container}>
            <RestaurantHeader
                name={restaurant.name}
                logo={restaurant.logoUrl}
                schedule={restaurant.schedule}
                handleShowDescription={handleShowDescription}
                handleShowModal={handleShowModal}
            />
            {isDescriptionOpen && (
                <RestaurantDetails
                    description={restaurant.description}
                    address={restaurant.address}
                    schedule={restaurant.schedule}
                    phone={restaurant.phone}
                    url={restaurant.url}
                />
            )}
            <RestaurantTabs id={restaurant.id} />
            <BottomModal
                modalVisible={isBottomModalVisible}
                setIsBottomModalVisible={setIsBottomModalVisible}
                handleMenuModal={handleMenuModal}
            />
            <MenuModal
                modalVisible={isMenuModalVisible}
                handleMenuModal={handleMenuModal}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
})

export default Restaurant

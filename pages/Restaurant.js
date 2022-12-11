import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Button, Share } from 'react-native'
import RestaurantHeader from '../ui/molecules/RestaurantHeader'
import RestaurantTabs from '../ui/molecules/RestaurantTabs'
import BottomTab from '../components/BottomTab'
import { useNavigation } from '@react-navigation/native'
import { getRestaurant } from '../utils/restaurantsData'
import RestaurantDetails from '../ui/molecules/RestaurantDetails'
import BottomModal from '../ui/molecules/BottomModal'
import MenuModal from '../ui/molecules/MenuModal'
import ShareModal from '../ui/molecules/ShareModal'

const Restaurant = ({ route }) => {
    const restaurant = getRestaurant(route.params.id)
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
    const [isBottomModalVisible, setIsBottomModalVisible] = useState(false)
    const [isMenuModalVisible, setIsMenuModalVisible] = useState(false)
    const [isShareModalVisible, setIsShareModalVisible] = useState(false)
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

    const handleShareModal = () => {
        setIsBottomModalVisible(false)
        setIsShareModalVisible(!isShareModalVisible)
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
                handleShareModal={handleShareModal}
            />
            <MenuModal
                modalVisible={isMenuModalVisible}
                handleMenuModal={handleMenuModal}
            />
            <ShareModal
                modalVisible={isShareModalVisible}
                handleShareModal={handleShareModal}
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

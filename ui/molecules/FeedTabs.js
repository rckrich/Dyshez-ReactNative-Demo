import React from 'react'
import { Text, View, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FeedCards from './FeedCards'
import Images from '../../utils/imagesIndex'

const restaurants = [
    Images.restaurants.roca,
    Images.restaurants.siqueff,
    Images.restaurants.ilpiattino,
    Images.restaurants.okana,
    Images.restaurants.orsons,
    Images.restaurants.fuddruckers,
    Images.restaurants.barrioregio,
    Images.restaurants.fridays,
    Images.restaurants.bostons,
    Images.restaurants.laparroquia,
]

const dishes = [
    Images.dishes.okanabowlhawaianbliss,
    Images.dishes.okanabowlsalmonwave,
    Images.dishes.okanafirecrackshrimp,
    Images.dishes.okanahotcheetostunawrap,
    Images.dishes.okanakahakidesalmon,
    Images.dishes.okanasalmonwrap,
]

function DishesScreen() {
    return <FeedCards data={dishes} />
}

function RestaurantsScreen() {
    return <FeedCards data={restaurants} />
}

function ProfileScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Sección en construcción</Text>
        </View>
    )
}

const Tab = createMaterialTopTabNavigator()

const FeedTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: '#B2B2B2' },
            }}
        >
            <Tab.Screen
                name="Dishes"
                component={DishesScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../assets/icons/dishes.png')}
                            style={{
                                width: 25,
                                height: 25,
                                opacity: focused ? null : 0.5,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Restaurants"
                component={RestaurantsScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../assets/icons/restaurants.png')}
                            style={{
                                width: 25,
                                height: 25,
                                opacity: focused ? null : 0.5,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Extra"
                component={ProfileScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../assets/icons/profile.png')}
                            style={{
                                width: 25,
                                height: 25,
                                opacity: focused ? null : 0.5,
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default FeedTabs

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

function BookmarksScreen() {
    return <FeedCards data={dishes} />
}

function HistoryScreen() {
    return <FeedCards data={dishes} />
}

const Tab = createMaterialTopTabNavigator()

const ProfileTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: '#434343' },
            }}
        >
            <Tab.Screen
                name="Dishes"
                component={DishesScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../assets/icons/heart.png')}
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
                name="Bookmarks"
                component={BookmarksScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../assets/icons/bookmark.png')}
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
                name="History"
                component={HistoryScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../assets/icons/eaten.png')}
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

export default ProfileTabs

import React from 'react'
import { Text, View, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FeedCards from './FeedCards'

function DishesScreen() {
    return <FeedCards />
}

function RestaurantsScreen() {
    return <FeedCards />
}

function BookmarksScreen() {
    return <FeedCards />
}

function HistoryScreen() {
    return <FeedCards />
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

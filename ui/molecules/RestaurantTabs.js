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

function SearchScreen() {
    return <FeedCards />
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

const RestaurantTabs = () => {
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
                            source={require('../../assets/icons/bookmark-outline.png')}
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
                            source={require('../../assets/icons/list.png')}
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
                            source={require('../../assets/icons/squares.png')}
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
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../../assets/icons/search.png')}
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

export default RestaurantTabs

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
        <Tab.Navigator>
            <Tab.Screen
                name="Dishes"
                component={DishesScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => (
                        <Image
                            source={require('../../assets/icons/dishes.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Restaurants"
                component={RestaurantsScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => (
                        <Image
                            source={require('../../assets/icons/restaurants.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Extra"
                component={ProfileScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: () => (
                        <Image
                            source={require('../../assets/icons/profile.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default FeedTabs
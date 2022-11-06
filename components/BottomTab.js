import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileScreen from './../pages/Profile'
import FeedScreen from './../pages/Feed'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Feed" component={FeedScreen} />
        </Tab.Navigator>
    )
}

export default BottomTab

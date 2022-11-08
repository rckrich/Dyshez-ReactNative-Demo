import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet, View } from 'react-native'

import HomeScreen from '../pages/Home'
import BillsScreen from '../pages/Bills'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName="HomeScreen">
            <Tab.Screen
                name={'HomeStackNavigator'}
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home Screen',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name={'BookStackNavigator'}
                component={BillsScreen}
                options={{
                    tabBarLabel: 'Book Screen',
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarLabel: {
        color: '#292929',
        fontSize: 12,
    },
    tabContainer: {
        height: 60,
    },
})

export default BottomTab

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileScreen from './../pages/Profile'
import FeedScreen from './../pages/Feed'
import BillsScreen from './../pages/Bills'
import CodeReaderScreen from '../pages/CodeReader'
import HomeScreen from '../pages/Home'
import { Image } from 'react-native'
import Header from './Header'
import Header2 from './Header2'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitle: () => <Header />,
                headerRight: () => <Header2 />,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="CodeReader"
                component={CodeReaderScreen}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/scan.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Bills"
                component={BillsScreen}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/bills.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/home.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/feed.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/profile.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab

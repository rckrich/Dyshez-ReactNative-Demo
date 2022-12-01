import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import LandingScreen from './pages/auth/Landing'
import RegisterScreen from './pages/auth/Register'
import BottomTab from './components/BottomTab'
import DrawerNavigator from './components/DrawerNavigator'
import RestaurantScreen from './pages/Restaurant'
import DishScreen from './pages/Dish'
import { useFonts } from 'expo-font'

const firebaseConfig = {
    apiKey: 'AIzaSyCfVmH8doh8QtGsgYRiggqOZltbMzECXmU',
    authDomain: 'dyshez-218f1.firebaseapp.com',
    projectId: 'dyshez-218f1',
    storageBucket: 'dyshez-218f1.appspot.com',
    messagingSenderId: '380011098681',
    appId: '1:380011098681:web:908431403729a05166d3e8',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const Stack = createStackNavigator()

const App = () => {
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                setIsLogged(false)
            } else {
                setIsLogged(true)
            }
        })
    })

    if (!isLogged) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Landing">
                    <Stack.Screen
                        name="Landing"
                        component={LandingScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{ auth: auth }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="DrawerNavigator">
                    <Stack.Screen
                        name="DrawerNavigator"
                        component={DrawerNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Restaurant"
                        component={RestaurantScreen}
                        options={{
                            headerTitle: () => (
                                <Image
                                    style={{
                                        width: 90,
                                        height: 37,
                                        resizeMode: 'contain',
                                    }}
                                    source={require('./assets/logo-pink.png')}
                                />
                            ),
                            headerBackImage: () => (
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30,
                                        marginLeft: 10,
                                    }}
                                    source={require('./assets/icons/back.png')}
                                />
                            ),
                            headerBackTitleVisible: false,
                        }}
                    />
                    <Stack.Screen
                        name="Dish"
                        component={DishScreen}
                        options={{
                            headerTitle: () => (
                                <Image
                                    style={{
                                        width: 90,
                                        height: 37,
                                        resizeMode: 'contain',
                                    }}
                                    source={require('./assets/logo-pink.png')}
                                />
                            ),
                            headerBackImage: () => (
                                <Image
                                    style={{
                                        width: 30,
                                        height: 30,
                                        marginLeft: 10,
                                    }}
                                    source={require('./assets/icons/back.png')}
                                />
                            ),
                            headerBackTitleVisible: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App

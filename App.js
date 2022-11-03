import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import LandingScreen from './pages/auth/Landing'
import RegisterScreen from './pages/auth/Register'

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
    const [isLoaded, setIsLoaded] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user)
            if (!user) {
                setIsLoaded(false)
                setIsLoading(true)
            } else {
                setIsLogged(true)
                setIsLoaded(true)
            }
        })
    }, [])

    if (!setIsLoaded)
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>Loading</Text>
            </View>
        )

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
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>User is logged</Text>
        </View>
    )
}

export default App

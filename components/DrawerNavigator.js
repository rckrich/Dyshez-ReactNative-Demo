import * as React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'
import HomeScreen from '../pages/Home'
import BillsScreen from '../pages/Bills'

import BottomTab from './BottomTab'
import Header from './Header'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    const DrawerHeaderContent = (props) => {
        return (
            <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
                <View
                    style={{
                        backgroundColor: '#4f4f4f',
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: -5,
                    }}
                >
                    <Text style={{ color: '#fff' }}>Home</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        )
    }

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#fff',
                },
                drawerPosition: 'right',

                // headerRight: () => (
                //     <Text onPress={() => navigation.openDrawer()}>Hola</Text>
                // ),
                headerTitle: () => <Header />,
            }}
            drawerContent={DrawerHeaderContent}
        >
            <Drawer.Screen
                name={'BottomTabNavigator'}
                component={BottomTab}
                options={{
                    drawerLabel: 'Home Screen',
                }}
            />
            <Drawer.Screen
                name={'MyRewardsStackNavigator'}
                component={BillsScreen}
                options={{
                    drawerLabel: 'My Rewards Screen',
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        marginLeft: 10,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    },
    headerRight: {
        marginRight: 15,
    },
    // drawer content
    drawerLabel: {
        fontSize: 14,
    },
    drawerLabelFocused: {
        fontSize: 14,
        color: '#551E18',
        fontWeight: '500',
    },
    drawerItem: {
        height: 50,
        justifyContent: 'center',
    },
    drawerItemFocused: {
        backgroundColor: '#ba9490',
    },
})

export default DrawerNavigator

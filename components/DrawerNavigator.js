import * as React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerToggleButton,
} from '@react-navigation/drawer'
import HomeScreen from '../pages/Home'
import BillsScreen from '../pages/Bills'
import BottomTab from './BottomTab'
import Header from './Header'
import { useFonts } from 'expo-font'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    const [loaded] = useFonts({
        PoppinsMedium: require('../assets/fonts/PoppinsMedium.ttf'),
    })

    if (!loaded) {
        return null
    }

    const DrawerHeaderContent = (props) => {
        return (
            <DrawerContentScrollView contentContainerStyle={{ flex: 1 }}>
                <View
                    style={{
                        backgroundColor: '#fff',
                        height: 50,
                        top: -5,
                        paddingRight: 15,
                        paddingLeft: 21,
                    }}
                >
                    <View
                        style={[
                            {
                                marginTop: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            },
                        ]}
                    >
                        <Image
                            style={{ width: 30, height: 30, marginLeft: 15 }}
                            source={require('../assets/icons/pink-icon.png')}
                        />
                        <DrawerToggleButton tintColor="#d5145a" />
                    </View>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        )
    }

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: styles.drawerStyle,
                drawerPosition: 'right',
                headerRight: () => <DrawerToggleButton tintColor="#d5145a" />,
                headerTitle: () => <Header />,
                drawerItemStyle: styles.drawerItem,
                headerTintColor: '#d5145a',
                headerLeft: false,
            }}
            drawerContent={DrawerHeaderContent}
        >
            <Drawer.Screen
                name={'Home'}
                component={BottomTab}
                options={{
                    drawerLabel: 'Inicio',
                    drawerLabelStyle: styles.drawerLabelStyle,
                    drawerIcon: () => (
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/icons/home.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name={'Profile'}
                component={BottomTab}
                options={{
                    drawerLabel: 'Mi Perfil',
                    drawerLabelStyle: styles.drawerLabelStyle,
                    drawerIcon: () => (
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/icons/profile.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name={'Bills'}
                component={BottomTab}
                options={{
                    drawerLabel: 'Mis Cuentas',
                    drawerLabelStyle: styles.drawerLabelStyle,
                    drawerIcon: () => (
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/icons/bills.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name={'Accounts'}
                component={BottomTab}
                options={{
                    drawerLabel: 'Cuentas Pagadas',
                    drawerLabelStyle: styles.drawerLabelStyle,
                    drawerIcon: () => (
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/icons/paid.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name={'Direct'}
                component={BottomTab}
                options={{
                    drawerLabel: 'Dyshez Direct',
                    drawerLabelStyle: styles.drawerLabelStyle,
                    drawerIcon: () => (
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/icons/direct.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name={'Orders'}
                component={BottomTab}
                options={{
                    drawerLabel: 'Mis pedidos',
                    drawerLabelStyle: styles.drawerLabelStyle,
                    drawerIcon: () => (
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/icons/basket.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name={'Help'}
                component={BottomTab}
                options={{
                    drawerLabel: 'Ayuda',
                    drawerLabelStyle: styles.drawerLabelStyle,
                    drawerIcon: () => (
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/icons/help.png')}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name={'Login'}
                component={BottomTab}
                options={{
                    drawerLabel: 'Iniciar Sesión',
                    drawerLabelStyle: styles.drawerLabelStyle,
                    drawerIcon: () => (
                        <Image
                            style={styles.imageStyle}
                            source={require('../assets/icons/profile.png')}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerItem: { borderBottomColor: '#efefef', borderBottomWidth: 2 },
    drawerStyle: { backgroundColor: '#fff' },
    drawerLabelStyle: {
        fontSize: 14,
        color: '#666666',
        marginVertical: 5,
        fontFamily: 'PoppinsMedium',
    },
    imageStyle: { width: 18, height: 18, marginLeft: 23 },
})

export default DrawerNavigator

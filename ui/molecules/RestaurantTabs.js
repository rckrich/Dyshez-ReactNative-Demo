import React from 'react'
import { Text, View, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FeedCards from './FeedCards'
import Images from '../../utils/imagesIndex'
import CategoryCards from './CategoryCards'
import ListMenu from './ListMenu'

const restaurants = [
    Images.restaurants.roca,
    Images.restaurants.siqueff,
    Images.restaurants.ilpiattino,
    Images.restaurants.okana,
    Images.restaurants.orsons,
    Images.restaurants.fuddruckers,
    Images.restaurants.barrioregio,
    Images.restaurants.fridays,
    Images.restaurants.bostons,
    Images.restaurants.laparroquia,
]

const dishes = [
    Images.dishes.okanabowlhawaianbliss,
    Images.dishes.okanabowlsalmonwave,
    Images.dishes.okanafirecrackshrimp,
    Images.dishes.okanahotcheetostunawrap,
    Images.dishes.okanakahakidesalmon,
    Images.dishes.okanasalmonwrap,
]

function SearchScreen() {
    return <FeedCards data={dishes} />
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

const RestaurantTabs = ({ id }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: '#434343' },
            }}
        >
            <Tab.Screen
                name="Dishes"
                children={() => <CategoryCards id={id} />}
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
                children={() => <ListMenu id={id} />}
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

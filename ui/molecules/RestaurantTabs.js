import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FeedCards from './FeedCards'
import Images from '../../utils/imagesIndex'
import CategoryCards from './CategoryCards'
import ListMenu from './ListMenu'
import SquaresMenu from './SquaresMenu'
import SearchMenu from './SearchMenu'
import { filterMenu } from '../../utils/dishesData'

const Tab = createMaterialTopTabNavigator()

const RestaurantTabs = ({ id }) => {
    const [filteredDishes, setFilteredDishes] = useState([])
    const [isFiltered, setIsFiltered] = useState(false)
    const [categorySelected, setCategorySelected] = useState(null)

    const handleCategorySelect = (category) => {
        if (category !== categorySelected) {
            const helper = filterMenu(id, category)
            setFilteredDishes(helper)
            setIsFiltered(true)
            setCategorySelected(category)
        } else {
            setFilteredDishes([])
            setIsFiltered(false)
            setCategorySelected(null)
        }
    }

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: { backgroundColor: '#434343' },
            }}
        >
            <Tab.Screen
                name="Dishes"
                children={() => (
                    <CategoryCards
                        id={id}
                        handleCategorySelect={handleCategorySelect}
                    />
                )}
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
                name="ListMenu"
                children={() => (
                    <ListMenu
                        id={id}
                        filteredDishes={filteredDishes}
                        handleCategorySelect={handleCategorySelect}
                        categorySelected={categorySelected}
                    />
                )}
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
                name="Squares"
                children={() => (
                    <SquaresMenu
                        id={id}
                        filteredDishes={filteredDishes}
                        handleCategorySelect={handleCategorySelect}
                        categorySelected={categorySelected}
                    />
                )}
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
                children={() => <SearchMenu id={id} />}
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

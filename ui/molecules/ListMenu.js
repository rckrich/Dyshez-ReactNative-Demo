import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import ScrollableCategories from './ScrollableCategories'
import ListCards from './ListCards'

const ListMenu = ({ id, setFilteredDishes, filteredDishes }) => {
    return (
        <View>
            <ScrollableCategories
                id={id}
                setFilteredDishes={setFilteredDishes}
            />
            <ListCards id={id} filteredDishes={filteredDishes} />
        </View>
    )
}

export default ListMenu

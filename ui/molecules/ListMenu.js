import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import ScrollableCategories from './ScrollableCategories'
import ListCards from './ListCards'

const ListMenu = ({
    id,
    filteredDishes,
    handleCategorySelect,
    categorySelected,
}) => {
    return (
        <View>
            <ScrollableCategories
                id={id}
                handleCategorySelect={handleCategorySelect}
                categorySelected={categorySelected}
            />
            <ListCards id={id} filteredDishes={filteredDishes} />
        </View>
    )
}

export default ListMenu

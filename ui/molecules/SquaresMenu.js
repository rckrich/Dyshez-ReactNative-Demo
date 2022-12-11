import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import ScrollableCategories from './ScrollableCategories'
import SquareCards from './SquareCards'

const SquaresMenu = ({
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
            <SquareCards id={id} filteredDishes={filteredDishes} />
        </View>
    )
}

export default SquaresMenu

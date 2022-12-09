import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import ScrollableCategories from './ScrollableCategories'
import SquareCards from './SquareCards'

const SquaresMenu = ({ id, setFilteredDishes, filteredDishes }) => {
    return (
        <View>
            <ScrollableCategories
                id={id}
                setFilteredDishes={setFilteredDishes}
            />
            <SquareCards id={id} filteredDishes={filteredDishes} />
        </View>
    )
}

export default SquaresMenu

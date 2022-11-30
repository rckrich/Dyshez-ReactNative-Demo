import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import ScrollableCategories from './ScrollableCategories'
import SquareCards from './SquareCards'

const SquaresMenu = ({ id }) => {
    return (
        <View>
            <ScrollableCategories id={id} />
            <SquareCards id={id} />
        </View>
    )
}

export default SquaresMenu

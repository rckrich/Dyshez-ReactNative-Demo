import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import ScrollableCategories from './ScrollableCategories'
import ListCards from './ListCards'

const ListMenu = ({ id }) => {
    return (
        <View>
            <ScrollableCategories id={id} />
            <ListCards id={id} />
            <Text>{id}</Text>
        </View>
    )
}

export default ListMenu

import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Item = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        alignItems: 'center',
        height: 90,
        margin: 10,
        width: '90%',
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
})

export default Item

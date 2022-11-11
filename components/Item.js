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
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 50,
        margin: 5,
        width: '90%',
        borderColor: '#f6f6f6',
        borderWidth: 1,
    },
    text: {
        color: '#000',
        fontSize: 24,
    },
})

export default Item

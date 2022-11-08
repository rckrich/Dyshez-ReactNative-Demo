import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

function Home() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/icons/home.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 30,
        color: '#d5145a',
    },
})

export default Home

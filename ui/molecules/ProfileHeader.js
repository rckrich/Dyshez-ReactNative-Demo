import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/profiles/profile1.png')}
            />
            <View style={styles.labels}>
                <Text style={styles.name}>Manuel Gutierrez</Text>
                <Text style={styles.email}>manuguti@hotmail.com</Text>
            </View>
            <Image
                style={styles.icon}
                source={require('../../assets/icons/gear.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 80,
        paddingVertical: 20,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    image: {
        width: 70,
        maxHeight: 70,
        borderRadius: 50,
    },
    labels: {
        paddingLeft: 0,
    },
    name: {
        fontSize: 14,
        fontWeight: '800',
    },
    email: {
        fontSize: 12,
        color: '#888888',
    },
    icon: {
        width: 35,
        maxHeight: 35,
        marginLeft: 30,
    },
})

export default ProfileHeader

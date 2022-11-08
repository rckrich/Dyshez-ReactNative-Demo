import React from 'react'
import { Image, Text } from 'react-native'

function Header() {
    return (
        <Image
            style={{ width: 140, height: 40 }}
            source={require('../assets/logo-pink.png')}
        />
    )
}

export default Header

import React from 'react'
import { Image, Text } from 'react-native'

function Header() {
    return (
        <Image
            style={{ width: 90, height: 37, resizeMode: 'contain' }}
            source={require('../assets/logo-pink.png')}
        />
    )
}

export default Header

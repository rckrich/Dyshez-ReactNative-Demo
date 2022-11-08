import React from 'react'
import {
    Image,
    Text,
    Button,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

function RightButtons() {
    return (
        <View
            style={[
                {
                    flexDirection: 'row',
                    padding: 10,
                },
            ]}
        >
            <TouchableOpacity onPress={(event) => console.log(event)}>
                <Image
                    source={require('../assets/icons/basket.png')}
                    style={{ width: 25, height: 25, marginHorizontal: 10 }}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={(event) => console.log(event)}>
                <Image
                    source={require('../assets/icons/menu.png')}
                    style={{ width: 25, height: 25, marginHorizontal: 10 }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default RightButtons

import React from 'react'
import {
    Dimensions,
    Text,
    View,
    StyleSheet,
    ImageBackground,
} from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

const Slider = ({ id, images }) => {
    const width = Dimensions.get('window').width

    return (
        <Carousel
            loop
            width={width}
            height={350}
            autoPlay={false}
            data={images}
            scrollAnimationDuration={1000}
            pagingEnabled={true}
            renderItem={({ index }) => (
                <View style={styles.card}>
                    <ImageBackground
                        source={images[index]}
                        resizeMode="cover"
                        style={styles.image}
                    >
                        <Text></Text>
                    </ImageBackground>
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
        height: 150,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
})

export default Slider

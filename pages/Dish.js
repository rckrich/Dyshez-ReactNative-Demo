import React from 'react'
import {
    Dimensions,
    Text,
    View,
    StyleSheet,
    Pressable,
    Image,
} from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import DishDescription from '../ui/molecules/DishDescription'
import Slider from '../ui/molecules/Slider'
import { getDish } from '../utils/dishesData'

const Dish = ({ route }) => {
    const dish = getDish(route.params.id)
    return (
        <View>
            <Slider id={dish.id} images={dish.images} />
            <Pressable style={styles.button}>
                <Text style={styles.text}>Agregar a cuenta</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Agregar a cuenta</Text>
            </Pressable>
            <Pressable style={styles.circle1}>
                <Image
                    style={{
                        width: 20,
                        height: 20,
                    }}
                    source={require('../assets/icons/direct.png')}
                />
            </Pressable>
            <Pressable style={styles.circle2}>
                <Image
                    style={{
                        width: 20,
                        height: 20,
                    }}
                    source={require('../assets/icons/scan.png')}
                />
            </Pressable>
            <Pressable style={styles.circle3}>
                <Image
                    style={{
                        width: 20,
                        height: 20,
                    }}
                    source={require('../assets/icons/eaten.png')}
                />
            </Pressable>
            <Pressable style={styles.circle4}>
                <Image
                    style={{
                        width: 20,
                        height: 18,
                    }}
                    source={require('../assets/icons/heart.png')}
                />
            </Pressable>
            <DishDescription
                name={dish.name}
                description={dish.description}
                price={dish.price}
                callories={dish.callories}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: 130,
        borderColor: '#fff',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 330,
        left: 20,
    },
    text: {
        color: '#fff',
    },
    circle1: {
        borderRadius: 25,
        position: 'absolute',
        top: 330,
        left: 180,
        width: 40,
        height: 40,
        backgroundColor: '#f3e3e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle2: {
        borderRadius: 25,
        position: 'absolute',
        top: 330,
        left: 230,
        width: 40,
        height: 40,
        backgroundColor: '#f3e3e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle3: {
        borderRadius: 25,
        position: 'absolute',
        top: 330,
        left: 280,
        width: 40,
        height: 40,
        backgroundColor: '#f3e3e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle4: {
        borderRadius: 25,
        position: 'absolute',
        top: 330,
        left: 330,
        width: 40,
        height: 40,
        backgroundColor: '#f3e3e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Dish

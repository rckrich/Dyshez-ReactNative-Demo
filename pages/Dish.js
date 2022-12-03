import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import DishDescription from '../ui/molecules/DishDescription'
import Slider from '../ui/molecules/Slider'
import { getDish } from '../utils/dishesData'

const Dish = ({ route }) => {
    const dish = getDish(route.params.id)
    return (
        <View>
            <Slider id={dish.id} images={dish.images} />
            <DishDescription
                name={dish.name}
                description={dish.description}
                price={dish.price}
                callories={dish.callories}
            />
        </View>
    )
}

export default Dish

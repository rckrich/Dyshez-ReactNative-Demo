import React from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    TouchableHighlight,
} from 'react-native'
import { getMenuCategories } from '../../utils/dishesData'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    category,
    imageUrl,
    navigation,
    handleCategorySelect,
}) => {
    const handleClick = () => {
        handleCategorySelect(category)
        navigation.jumpTo('Squares')
    }

    return (
        <TouchableHighlight style={styles.card} onPress={() => handleClick()}>
            <ImageBackground
                source={imageUrl}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.wrapper}>
                    <Text style={styles.text}>{category}</Text>
                </View>
            </ImageBackground>
        </TouchableHighlight>
    )
}

const CategoryCards = ({ id, handleCategorySelect }) => {
    const navigation = useNavigation()
    const [loaded] = useFonts({
        PoppinsRegular: require('../../assets/fonts/PoppinsRegular.ttf'),
    })

    if (!loaded) {
        return null
    }

    const renderItem = ({ item }) => (
        <RestaurantCard
            category={item.category}
            imageUrl={item.imageUrl}
            navigation={navigation}
            handleCategorySelect={handleCategorySelect}
        />
    )
    const categories = getMenuCategories(id)

    return (
        <FlatList
            style={styles.container}
            data={categories}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{ height: 30 }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 2,
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
        margin: 1,
        height: 140,
        maxWidth: '33%',
    },
    image: {
        flex: 1,
        width: '100%',
    },
    wrapper: {
        backgroundColor: '#fff',
        color: '#000',
        marginTop: '80%',
        maxWidth: '75%',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        minHeight: 25,
        justifyContent: 'center',
        alignItems: 'left',
    },
    text: {
        fontSize: 12,
        fontFamily: 'PoppinsRegular',
        paddingRight: 5,
    },
})

export default CategoryCards

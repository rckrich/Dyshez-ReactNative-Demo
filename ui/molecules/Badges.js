import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Badges = () => {
    return (
        <View style={styles.container}>
            <View style={styles.labels}>
                <Image
                    style={styles.image}
                    source={require('../../assets/icons/pink-dish.png')}
                />
                <Text style={styles.bold}>2457 </Text>
                <Text style={styles.regular}>platillos consumidos</Text>
            </View>
            <View style={styles.labels}>
                <Image
                    style={styles.image}
                    source={require('../../assets/icons/visited.png')}
                />
                <Text style={styles.bold}>430 </Text>
                <Text style={styles.regular}>restaurantes visitados</Text>
            </View>
            <View style={styles.labels}>
                <Image
                    style={styles.image}
                    source={require('../../assets/icons/chef.png')}
                />
                <Text style={styles.regular}>Comenzal de </Text>
                <Text style={styles.bold}>oro</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 50,
        paddingVertical: 5,
        flexDirection: 'column',
    },
    labels: {
        height: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    bold: {
        fontSize: 16,
        fontWeight: '800',
    },
    regular: {
        fontSize: 16,
        color: '#707070',
    },
})

export default Badges

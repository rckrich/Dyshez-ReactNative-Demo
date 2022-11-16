import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Badges = () => {
    return (
        <View style={styles.container}>
            <View style={styles.labels}>
                <Image
                    style={styles.image}
                    source={require('../../assets/icons/menu.png')}
                />
                <Text style={styles.bold}>2457 </Text>
                <Text style={styles.regular}>platillos consumidos</Text>
            </View>
            <View style={styles.labels}>
                <Image
                    style={styles.image}
                    source={require('../../assets/icons/menu.png')}
                />
                <Text style={styles.bold}>430 </Text>
                <Text style={styles.regular}>restaurantes visitados</Text>
            </View>
            <View style={styles.labels}>
                <Image
                    style={styles.image}
                    source={require('../../assets/icons/menu.png')}
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
        height: 90,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    labels: {
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    bold: {
        fontSize: 18,
        fontWeight: '800',
    },
    regular: {
        fontSize: 18,
    },
})

export default Badges

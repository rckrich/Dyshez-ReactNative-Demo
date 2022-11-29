import Images from './imagesIndex'

export const getMenu = (id) => {
    return dishes.filter((item) => item.restaurantId === id)
}

const unique = (value, index, self) => {
    return self.indexOf(value) === index
}

export const getMenuCategories = (id) => {
    const helper = []
    const dishes = getMenu(id)

    dishes.forEach((dish) => {
        const isNew = helper.find((item) => item.category === dish.category)

        if (!isNew) {
            return helper.push(dish)
        }
    })

    return helper
}

export const dishes = [
    // Okana
    {
        name: 'Bowl Salmon Wave',
        id: 'okanabowlsalmonwave',
        restaurantId: 'okana',
        imageUrl: Images.dishes.okanabowlsalmonwave,
        category: 'Bowls',
    },
    {
        name: 'Bowl Hawaian Bliss',
        id: 'okanabowlhawaianbliss',
        restaurantId: 'okana',
        imageUrl: Images.dishes.okanabowlhawaianbliss,
        category: 'Bowls Frios',
    },
    {
        name: 'Firecrack Shrimp',
        id: 'okanafirecrackshrimp',
        restaurantId: 'okana',
        imageUrl: Images.dishes.okanafirecrackshrimp,
        category: 'Camarón',
    },
    {
        name: 'Hot Cheetos Tuna Wrap',
        id: 'okanahotcheetostunawrap',
        restaurantId: 'okana',
        imageUrl: Images.dishes.okanahotcheetostunawrap,
        category: 'Wraps',
    },
    {
        name: 'Kahaki de Salmón',
        id: 'okanakahakidesalmon',
        restaurantId: 'okana',
        imageUrl: Images.dishes.okanakahakidesalmon,
        category: 'Barra Fria',
    },
    {
        name: 'Salmón Wrap',
        id: 'okanasalmonwrap',
        restaurantId: 'okana',
        imageUrl: Images.dishes.okanasalmonwrap,
        category: 'Barra Caliente',
    },
    // General
    {
        name: 'Pizza de pepperoni',
        id: 'pizzapepperoni',
    },
    {
        name: 'Pizzaburguer',
        id: 'pizzaburguer',
    },
    {
        name: 'Hamburguesa Clasica',
        id: 'burguer',
    },
    {
        name: 'Burro de pastor',
        id: 'burro',
    },
    {
        name: 'Torta de Bistec',
        id: 'torta',
    },
    {
        name: 'Frijoles Charros',
        id: 'frijolescharros',
    },
    {
        name: 'Frijol con puerco',
        id: 'frijolconpuerco',
    },
]

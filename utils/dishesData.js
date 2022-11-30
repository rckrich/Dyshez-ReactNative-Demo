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
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    {
        name: 'Bowl Hawaian Bliss',
        id: 'okanabowlhawaianbliss',
        restaurantId: 'okana',
        imageUrl: Images.dishes.okanabowlhawaianbliss,
        category: 'Bowls Frios',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    {
        name: 'Firecrack Shrimp',
        id: 'okanafirecrackshrimp',
        restaurantId: 'okana',
        imageUrl: Images.dishes.okanafirecrackshrimp,
        category: 'Camarón',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    {
        name: 'Hot Cheetos Tuna Wrap',
        id: 'okanahotcheetostunawrap',
        restaurantId: 'okana',
        imageUrl: Images.dishes.okanahotcheetostunawrap,
        category: 'Wraps',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    {
        name: 'Kahaki de Salmón',
        id: 'okanakahakidesalmon',
        restaurantId: 'okana',
        imageUrl: Images.dishes.okanakahakidesalmon,
        category: 'Barra Fria',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    {
        name: 'Salmón Wrap',
        id: 'okanasalmonwrap',
        restaurantId: 'okana',
        imageUrl: Images.dishes.okanasalmonwrap,
        category: 'Barra Caliente',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    // Roca
    {
        name: 'Boneless',
        id: 'rocaboneless',
        restaurantId: 'roca',
        imageUrl: Images.dishes.rocaboneless,
        category: 'Entradas',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    {
        name: 'Camarones al Ajillo',
        id: 'rocacamaronesalajillo',
        restaurantId: 'roca',
        imageUrl: Images.dishes.rocacamaronesalajillo,
        category: 'Especialidades',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    {
        name: 'Ensalada de Tomate',
        id: 'rocaensaladadetomate',
        restaurantId: 'roca',
        imageUrl: Images.dishes.rocaensaladadetomate,
        category: 'Ensaladas y Sopas',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    {
        name: 'Fettuccini Alfredo',
        id: 'rocafettuccinialfredo',
        restaurantId: 'roca',
        imageUrl: Images.dishes.rocafettuccinialfredo,
        category: 'Risottos y Pastas',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    {
        name: 'Tomahawk de la Casa',
        id: 'rocatomahawkdelacasa',
        restaurantId: 'roca',
        imageUrl: Images.dishes.rocatomahawkdelacasa,
        category: 'Cortes Prime',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    {
        name: 'Papas al Horno',
        id: 'rocapapasalhorno',
        restaurantId: 'roca',
        imageUrl: Images.dishes.rocapapasalhorno,
        category: 'Guarniciones',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
    },
    {
        name: 'Cerveza Artesanal',
        id: 'rocacervezaartesanal',
        restaurantId: 'roca',
        imageUrl: Images.dishes.rocacervezaartesanal,
        category: 'Bebidas',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        callories: 200,
        price: 150.5,
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

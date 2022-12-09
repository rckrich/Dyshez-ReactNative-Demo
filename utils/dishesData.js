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

export const filterMenu = (id, category) => {
    const dishes = getMenu(id)
    const dishesToShow = dishes.filter((dish) => dish.category === category)
    return dishesToShow
}

export const getDish = (id) => {
    return dishes.find((item) => item.id === id)
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
        name: 'Gravlax de salmón noruego',
        id: 'rocagravlaxsalmon',
        restaurantId: 'roca',
        description:
            'Curado 24hrs, montado sobre pan de pepitas y cacahuate con jocoque y arúgula',
        callories: 200,
        price: 240,
        category: 'Entradas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Ostiones Rockefeller (4 pzas)',
        id: 'rocaostiones',
        restaurantId: 'roca',
        description: 'Ostiones jumbo vivos de ensenada al estilo Rockefeller',
        callories: 200,
        price: 360,
        category: 'Entradas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Queso brie empanizado',
        id: 'rocaquesobrie',
        restaurantId: 'roca',
        description:
            'Dados de queso brie empanizado con panko acompañado de mermelada rústica de tomates cherry',
        callories: 200,
        price: 260,
        category: 'Entradas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Coliflor rostizada',
        id: 'rocacoliflor',
        restaurantId: 'roca',
        description:
            'Coliflor local rostizada y gratinada con queso muenster, rellena de queso chester y bañada en salsa de pimientos baby',
        callories: 200,
        price: 250,
        category: 'Entradas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Kibi de cordero con labne trufado y zatar',
        id: 'rocakibicordero',
        restaurantId: 'roca',
        description:
            'Horneado con aceite de oliva, acompañado de labne trufado y zatar',
        callories: 200,
        price: 210,
        category: 'Entradas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Queso fundido natural',
        id: 'rocaquesofundido',
        restaurantId: 'roca',
        description: 'Queso de la casa con tortillas artesanales de harina',
        callories: 200,
        price: 150,
        category: 'Entradas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Wonton de cerdo',
        id: 'rocawonton',
        restaurantId: 'roca',
        description:
            'Fritos y rellenos de carne de cerdo especiada servidos con una mermelada picante de piña ahumada con labne',
        callories: 200,
        price: 220,
        category: 'Entradas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Tartar de res',
        id: 'rocatartar',
        restaurantId: 'roca',
        description:
            'Centro de ribeye picado finamente junto con alcaparras, pepinillos y cebolla morada, aderezado con mayonesa de la casa, parmigiano reggiano y arúgula',
        callories: 200,
        price: 350,
        category: 'Entradas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Tiradito de centro de rib eye',
        id: 'rocatiradito',
        restaurantId: 'roca',
        description:
            'Láminas de centro de ribeye prime marinadas en salsas negras acompañado de aguacate, brotes de rábano y cilantro junto a fritura de tortilla',
        callories: 200,
        price: 320,
        category: 'Entradas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Guacamole',
        id: 'rocaguacamole',
        restaurantId: 'roca',
        description: 'Guacamole tradicional',
        callories: 200,
        price: 150,
        category: 'Entradas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Caramelos de centro de rib eye (3 pzas)',
        id: 'rocacaramelos',
        restaurantId: 'roca',
        description:
            'Centro de ribeye prime montados en tortillas de maiz azul con costras de queso y cebolla caramelizada',
        callories: 200,
        price: 380,
        category: 'Especialidades',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Centro de rib eye flameado al estilo roca',
        id: 'rocacentro',
        restaurantId: 'roca',
        description:
            'Centro de rib eye relleno con una farsa de tuétano, champiñones, queso y cebolla. Platillo flameado con mezcal en mesa',
        callories: 200,
        price: 850,
        category: 'Especialidades',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Hamburguesa de la casa',
        id: 'rocahamburguesa',
        restaurantId: 'roca',
        description:
            'Nuestra receta de carnes prime con pan brioche de la casa, mayonesa trufada, lechuga boston, cebolla morada y jitomate hidropónico',
        callories: 200,
        price: 370,
        category: 'Especialidades',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Pechuga de pollo orgánica con zarzamora',
        id: 'rocapechuga',
        restaurantId: 'roca',
        description:
            'Al sous vide, montada sobre puré de papa, glaseada en salsa de zarzamora y ejotes franceses envueltos en tocino',
        callories: 200,
        price: 280,
        category: 'Especialidades',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Pulpo a la yucateca',
        id: 'rocapulpo',
        restaurantId: 'roca',
        description:
            'Pulpo maya al estilo pibil acompañado de tuétano, servido con costras de queso',
        callories: 200,
        price: 380,
        category: 'Especialidades',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Salmón noruego con costra de pistache',
        id: 'rocasalmonpistache',
        restaurantId: 'roca',
        description:
            'Acompañado de puré de maiz y una salsa de naranja dulce con tequila',
        callories: 200,
        price: 380,
        category: 'Especialidades',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Surf and turf',
        id: 'rocasurf',
        restaurantId: 'roca',
        description:
            'Camarones, callos de hacha y centro de ribeye, acompañados de una salsa de queso parmigiano reggiano',
        callories: 200,
        price: 850,
        category: 'Especialidades',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Ensalada de cítricos y frutos secos',
        id: 'rocacitricos',
        restaurantId: 'roca',
        description:
            'Mix de lechugas acompañadas de toronja, fresa, pera y frutos secos, aderezada con nuestra vinagreta de cítricos',
        callories: 200,
        price: 210,
        category: 'Ensaladas y Sopas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Ensalada césar',
        id: 'rocacesar',
        restaurantId: 'roca',
        description:
            'La tradicional ensalada de lechuga orejona con una costra de parmigiano reggiano y crutones de focaccia',
        callories: 200,
        price: 240,
        category: 'Ensaladas y Sopas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Ensalada de burrata',
        id: 'rocaburrata',
        restaurantId: 'roca',
        description:
            'Mix de lechugas con queso burrata, higos caramelizados y nuestra vinagreta de higo',
        callories: 200,
        price: 295,
        category: 'Ensaladas y Sopas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Caldo Roca',
        id: 'rocacaldo',
        restaurantId: 'roca',
        description:
            'A base de tres chiles, acompañado de suadero de filete prime, tocino, chorizo, chistorra y garbanzo',
        callories: 200,
        price: 300,
        category: 'Ensaladas y Sopas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Jugo de carne',
        id: 'rocajugo',
        restaurantId: 'roca',
        description: 'Nuestra versión, elaborado con carne prime y tuétano',
        callories: 200,
        price: 270,
        category: 'Ensaladas y Sopas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Sopa de cebolla',
        id: 'rocasopa',
        restaurantId: 'roca',
        description:
            'La clásica con una base de jugo de carne y cebolla blanca, terminada con un crutón gratinado con queso de la casa',
        callories: 200,
        price: 200,
        category: 'Ensaladas y Sopas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Ravioles de ricotta y espinaca',
        id: 'rocaravioles',
        restaurantId: 'roca',
        description:
            'Rellenos de queso ricotta y espinaca bañados con salsa pomodoro trufada y láminas de reggiano parmigiano',
        callories: 200,
        price: 310,
        category: 'Risottos y Pastas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Fetuccini en salsa de cacahuate y camarón',
        id: 'rocafetuccinicacahuate',
        restaurantId: 'roca',
        description:
            'Pasta artesanal salteada en salsa de cacahuate confitada con chile de árbol acompañado de camarones flameados en mezcal',
        callories: 200,
        price: 360,
        category: 'Risottos y Pastas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Tagliatelle con foie gras trufada',
        id: 'rocatagliatelle',
        restaurantId: 'roca',
        description:
            'Pasta artesanal bañada en salsa de foie gras y trufa con láminas de queso reggiano parmigiano',
        callories: 200,
        price: 580,
        category: 'Risottos y Pastas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Rocas fetuccini',
        id: 'rocafetuccini',
        restaurantId: 'roca',
        description:
            'Pasta artesanal en crema de tuétano y hongos con queso grana padano',
        callories: 200,
        price: 350,
        category: 'Risottos y Pastas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Risotto de hongos',
        id: 'rocarisotto',
        restaurantId: 'roca',
        description:
            'Risotto trufado preparado con setas y hongos mixtos con queso parmegiano reggiano',
        callories: 200,
        price: 290,
        category: 'Risottos y Pastas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Risotto negro',
        id: 'rocarisottonegro',
        restaurantId: 'roca',
        description:
            'Elaborado con tinta de calamar acompañado de camarones u10 y callo de hacha',
        callories: 200,
        price: 560,
        category: 'Risottos y Pastas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Barbacoa de costillar',
        id: 'rocabarbacoa',
        restaurantId: 'roca',
        description: 'Costillar en barbacoa.',
        callories: 200,
        price: 560,
        category: 'Cortes Prime',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Rib Eye',
        id: 'rocaribeye',
        restaurantId: 'roca',
        description: 'Rib Eye',
        callories: 200,
        price: 560,
        category: 'Cortes Prime',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Spinalis',
        id: 'rocaspinalis',
        restaurantId: 'roca',
        description: 'Tapa de Rib Eye',
        callories: 200,
        price: 560,
        category: 'Cortes Prime',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Centro de rib eye',
        id: 'rocacentrore',
        restaurantId: 'roca',
        description: 'Centro de rib eye',
        callories: 200,
        price: 560,
        category: 'Cortes Prime',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Cowboy',
        id: 'rocacowboy',
        restaurantId: 'roca',
        description: 'Cowboy',
        callories: 200,
        price: 560,
        category: 'Cortes Prime',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Filete',
        id: 'rocafilete',
        restaurantId: 'roca',
        description: 'Filete',
        callories: 200,
        price: 560,
        category: 'Cortes Prime',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'New York',
        id: 'rocanewyork',
        restaurantId: 'roca',
        description: 'New York',
        callories: 200,
        price: 560,
        category: 'Cortes Prime',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Mac n cheese con pork belly',
        id: 'rocamac',
        restaurantId: 'roca',
        description: 'Mac n cheese con pork belly',
        callories: 200,
        price: 110,
        category: 'Guarniciones',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Puré de papa',
        id: 'rocapure',
        restaurantId: 'roca',
        description: 'Puré de papa',
        callories: 200,
        price: 75,
        category: 'Guarniciones',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Papas a la francesa',
        id: 'rocapapas',
        restaurantId: 'roca',
        description: 'Papas a la francesa',
        callories: 200,
        price: 90,
        category: 'Guarniciones',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Espinacas a la crema',
        id: 'rocaespinacas',
        restaurantId: 'roca',
        description: 'Espinacas a la crema',
        callories: 200,
        price: 105,
        category: 'Guarniciones',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Verduras asadas',
        id: 'rocaverduras',
        restaurantId: 'roca',
        description: 'Verduras asadas',
        callories: 200,
        price: 80,
        category: 'Guarniciones',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Cebolla asada',
        id: 'rocacebolla',
        restaurantId: 'roca',
        description: 'Cebolla asada',
        callories: 200,
        price: 60,
        category: 'Guarniciones',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Coca Cola',
        id: 'rocacoca',
        restaurantId: 'roca',
        description: 'Coca Cola',
        callories: 200,
        price: 40,
        category: 'Bebidas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
    },
    {
        name: 'Cerveza Montejo',
        id: 'rocacerveza',
        restaurantId: 'roca',
        description: 'Cerveza Montejo',
        callories: 200,
        price: 60,
        category: 'Bebidas',
        imageUrl: Images.dishes.rocaboneless,
        images: [
            Images.dishes.rocaboneless,
            Images.dishes.rocacamaronesalajillo,
            Images.dishes.rocaensaladadetomate,
            Images.dishes.rocafettuccinialfredo,
        ],
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

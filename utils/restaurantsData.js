import Images from './imagesIndex'

export const getRestaurants = () => {
    return data.filter((item) => item.type === 'Restaurante')
}

export const data = [
    {
        name: 'Roca',
        type: 'Restaurante',
        id: 'roca',
        logoUrl: Images.restaurants.roca,
    },
    {
        name: 'Siqueff',
        type: 'Restaurante',
        id: 'siqueff',
        logoUrl: Images.restaurants.siqueff,
    },
    {
        name: 'Il Piattino',
        type: 'Restaurante',
        id: 'ilpiattino',
        logoUrl: Images.restaurants.ilpiattino,
    },
    {
        name: 'Okana',
        type: 'Restaurante',
        id: 'okana',
        logoUrl: Images.restaurants.okana,
    },
    {
        name: 'Orsons',
        type: 'Restaurante',
        id: 'orsons',
        logoUrl: Images.restaurants.orsons,
    },
    {
        name: 'Fuddruckers',
        type: 'Restaurante',
        id: 'fuddruckers',
        logoUrl: Images.restaurants.fuddruckers,
    },
    {
        name: 'Barrio Regio',
        type: 'Restaurante',
        id: 'barrioregio',
        logoUrl: Images.restaurants.barrioregio,
    },
    {
        name: 'Fridays',
        type: 'Restaurante',
        id: 'fridays',
        logoUrl: Images.restaurants.fridays,
    },
    {
        name: 'Bostons',
        type: 'Restaurante',
        id: 'bostons',
        logoUrl: Images.restaurants.bostons,
    },
    {
        name: 'La Parroquia',
        type: 'Restaurante',
        id: 'fridays',
        logoUrl: Images.restaurants.laparroquia,
    },
    // Platillos
    {
        name: 'Pizza de pepperoni',
        type: 'Platillo',
        id: 'pizzapepperoni',
    },
    {
        name: 'Pizzaburguer',
        type: 'Platillo',
        id: 'pizzaburguer',
    },
    {
        name: 'Hamburguesa Clasica',
        type: 'Platillo',
        id: 'burguer',
    },
    {
        name: 'Burro de pastor',
        type: 'Platillo',
        id: 'burro',
    },
    {
        name: 'Torta de Bistec',
        type: 'Platillo',
        id: 'torta',
    },
    {
        name: 'Frijoles Charros',
        type: 'Platillo',
        id: 'frijolescharros',
    },
    {
        name: 'Frijol con puerco',
        type: 'Platillo',
        id: 'frijolconpuerco',
    },
    {
        name: 'Bowl Salmon Wave',
        type: 'Platillo',
        id: 'okanabowlsalmonwave',
    },
    {
        name: 'Bowl Hawaian Bliss',
        type: 'Platillo',
        id: 'okanabowlhawaianbliss',
    },
    // Usuarios
    {
        name: 'Eduardo Pizzarro',
        type: 'Usuario',
        id: 'profile1',
    },
    {
        name: 'Julio Pizzarro',
        type: 'Usuario',
        id: 'profile2',
    },
    {
        name: 'Jose Dominguez',
        type: 'Usuario',
        id: 'profile3',
    },
    {
        name: 'Elizabeth Frigola',
        type: 'Usuario',
        id: 'profile4',
    },
    {
        name: 'Frida Ku',
        type: 'Usuario',
        id: 'profile5',
    },
]

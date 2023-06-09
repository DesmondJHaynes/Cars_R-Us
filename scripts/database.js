
const database = {

    paint : [
        {
            id: 1,
            color: "red"
        }
    ],
    tech: [
        {
            id: 1,
            package: "word"
        }
    ],
    interior: [
        {
            id: 1,
            interior: "nice"
        }
    ],
    wheels: [
        {
            id: 1,
            size: "20"
        }
    ],
    orders: [
        {
            id: 1,
            paintId: 1,
            techId: 1,
            interiorId: 1,
            sizeId: 1,
        }
    ]

}


export const getPaint = () => {
    return database.paint.map(paint => ({...paint}))
}
export const getTech = () => {
    return database.tech.map(tech => ({...tech}))
}
export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}
export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
}
export const getOrders = () => {
    return database.orders.map(order =>({...order}))
}
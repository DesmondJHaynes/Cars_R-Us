
const database = {

    paint : [
        {
            id: 1,
            color: "red"
        },
        {
            id: 2,
            color: "white"
        },
        {
            id: 3,
            color: "blue"
        },
        {
            id: 4,
            color: "black"
        },
        {
            id: 5,
            color: "silver"
        },
    ],
    tech: [
        {
            id: 1,
            package: "Basic"
        },
        {
            id: 2,
            package: "Gold Standard Plus"
        },
        {
            id: 3,
            package: "Ultra Suite Platinum"
        },
        
    ],
    interior: [
        {
            id: 1,
            interior: "I'm too broke to be buying"
        },
        {
            id: 2,
            interior: "Mid-Tier Fabric"
        },
        {
            id: 3,
            interior: "Premium Leather"
        },
        {
            id: 4,
            interior: "Baby Panda Fur"
        },
    ],
    wheels: [
        {
            id: 1,
            size: "18in (xL Pizza)"
        },
        {
            id: 2,
            size: "20in (2xL Pizza)"
        },
        {
            id: 3,
            size: "24in (MosterTruck)"
        },
    ],
    orders: [
        {
            id: 1,
            paintId: 1,
            techId: 1,
            interiorId: 1,
            sizeId: 1,
            timestamp: 1686588189669
        }
    ],
    tempStorage: {}

}



// Getter Functions

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

// Setter Functions

export const orderBuilder = (idTitle,id) => {
    database.tempStorage[idTitle] = id
}

// Utility Functions

export const windowAlert = (object, value) => {
    window.alert(`You chose ${object[value]}`)
}

export const pickoption = (eventTargetValue, objArr) => {
    for (const obj of objArr) {
        if (obj.id === parseInt(eventTargetValue)) {
            return obj;
        }
    }
}

export const ChangeEventListener = (targetId,targetArrLIst,idTitle) => {
    document.addEventListener("change", event => {

        if (event.target.id === targetId) {
            const option = event.target.value;
            
            const optionPicked = pickoption(option, targetArrLIst)

            orderBuilder(idTitle,optionPicked.id)

            console.log(database.tempStorage)       
        }
    })
}

//Change State
document.addEventListener("click", event => {
    if (event.target.id === "save-order") {
        let newOrder = {...database.tempStorage}

        let lastIndex = database.orders.length -1
        newOrder.id = lastIndex +1
        newOrder.timestamp = Date.now()

        database.orders.push(newOrder)

        database.tempStorage = {}
    }
}
)

const database = {

    paint : [
        {
            id: 1,
            color: "red",
            price: 10.75
        },
        {
            id: 2,
            color: "white",
            price: 10.75
        },
        {
            id: 3,
            color: "blue",
            price: 10.75
        },
        {
            id: 4,
            color: "black",
            price: 20.50
        },
        {
            id: 5,
            color: "silver",
            price: 80.25
        },
    ],
    tech: [
        {
            id: 1,
            price: 250.00, 
            package: "Basic"
        },
        {
            id: 2,
            price: 500.01, 
            package: "Gold Standard Plus"
        },
        {
            id: 3,
            price: 1000.02, 
            package: "Ultra Suite Platinum"
        },
        
    ],
    interior: [
        {
            id: 1,
            price: 25,
            interior: "I'm too broke to be buying"
        },
        {
            id: 2,
            price: 750,
            interior: "Mid-Tier Fabric"
        },
        {
            id: 3,
            price: 1500,
            interior: "Premium Leather"
        },
        {
            id: 4,
            price: 9999,
            interior: "Baby Panda Fur"
        },
    ],
    wheels: [
        {
            id: 1,
            price: 120,
            size: "18in (xL Pizza)"
        },
        {
            id: 2,
            price: 250,
            size: "20in (2xL Pizza)"
        },
        {
            id: 3,
            price: 400,
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

const windowAlert = (object, value) => {
    window.alert(`You chose ${object[value]}`)
}

const pickoption = (eventTargetValue, objArr) => {
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
export const addToOrders = () => {
    const newOrder = {...database.tempStorage}

    let lastIndex = database.orders.length -1
    newOrder.id = database.orders[lastIndex].id +1
    newOrder.timestamp = Date.now()

    database.orders.push(newOrder)

    database.tempStorage = {}

    console.log(database.orders)

    document.dispatchEvent(new CustomEvent("stateChange"))
}


document.addEventListener("click", event => {
    if (event.target.id === "save-order") {
        if (database.tempStorage.paintId &&
            database.tempStorage.techId &&
            database.tempStorage.sizeId &&
            database.tempStorage.interiorId) {
        addToOrders();
    }}
})
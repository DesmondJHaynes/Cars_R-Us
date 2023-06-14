import {getInterior, getOrders, getPaint, getTech, getWheels } from "./database.js"

const paints = getPaint()
const techs = getTech()
const interiors = getInterior()
const wheels = getWheels()

export const orders = () => {
    const orderList = getOrders()
    let html = ``


    // study the .find method more (to remember it, it's mad powerful)
    for (const order of orderList) {
        const chosenPaint = paints.find(paint => {
            return paint.id === order.paintId
        })
        const chosenTech = techs.find(tech => {
            return tech.id === order.techId
        })
        const chosenInterior = interiors.find(interior => {
            return interior.id === order.interiorId
        })
        const chosenWheel = wheels.find(wheel => {
            return wheel.id === order.sizeId
        })
        
        const priceTotal = chosenInterior.price + chosenPaint.price + chosenTech.price + chosenWheel.price;

        //look more into formatting methods! Seems like a possible time saver
        const formatPrice = priceTotal.toLocaleString("en-US", 
        { style: "currency", currency: "USD"})

        html += `<li >Order #${order.id} was placed on #${order.timestamp} and will cost ${formatPrice}</li>`
    }


    return html

    // const html = orderList.map(order => {
    //    return `<li >Order #${order.id} was placed on #${order.timestamp}</li>`
    // })

    // return html.join('')
}


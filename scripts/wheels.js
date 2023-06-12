import { ChangeEventListener, getWheels } from "./database.js";

const wheels = getWheels();


export const selectWheels = () => {
    const wheelOptions = wheels.map((wheel)=>{

        return `<option value="${wheel.id}">${wheel.size}</option>`
    })

    return wheelOptions
}

ChangeEventListener("wheels__select",wheels,"sizeId")
import { ChangeEventListener, getInterior } from "./database.js";

const interiors = getInterior()

export const selectInterior = () => {
    const interiorOptions = interiors.map((interior)=>{

        return `<option value="${interior.id}">${interior.interior}</option>`
    })

    return interiorOptions.join("")
}

ChangeEventListener("interior__select",interiors,"interiorId")
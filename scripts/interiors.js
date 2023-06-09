import { getInterior } from "./database.js";

const interiors = getInterior()

export const selectInterior = () => {
    console.log(`<div class="interiors"></div>`)
}
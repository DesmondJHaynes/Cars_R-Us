import { getWheels } from "./database.js";

const wheels = getWheels();


export const selectWheels = () => {
    console.log(`<div class="wheels"></div>`)
}
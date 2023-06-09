import { getTech } from "./database.js";

const technologies = getTech();


export const selectTech = () => {
    console.log(`<div class="tech"></div>`)
}
import { getPaint } from "./database.js";

const paints = getPaint();


export const selectPaint = () => {
    console.log(`<div class="paints"></div>`)
}
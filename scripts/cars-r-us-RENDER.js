import { addToOrders } from "./database.js";
import { selectInterior } from "./interiors.js";
import { orders } from "./orders.js";
import { selectPaint } from "./paints.js";
import { selectTech } from "./technologies.js";
import { selectWheels } from "./wheels.js";


export const renderHtml = () => {
    let html = `
        <div class="Interiors">
            <h2 class="Interiors">Interiors</h2>
            <select id="interior__select">
                <option value="0">Select your Interiors</option>
                ${selectInterior()}
            </select>
        </div>

        <div class="Wheels">
            <h2 class="Wheels">Wheels</h2>
            <select id="wheels__select">
                <option value="0">Select your Wheels</option>
                ${selectWheels()}
            </select>
        </div>

        <div class="Paints">
            <h2 class="Paints">Paints</h2>
            <select id="paint__select">
                <option value="0">Select your Paint</option>
                ${selectPaint()}
            </select>
        </div>

        <div class="Techs">
            <h2 class="Tech">Technologies</h2>
            <select id="tech__select">
                <option value="0">Select your Tech</option>
                ${selectTech()}
            </select>
        </div> 

        <article>
            <button id="save-order">Place Your Order</button>
        </article>

        <section id="orderLIst">
            <h2 class="Orders">Current Orders</h2>
            <ul>
            ${orders()}
            </ul>
        </section>
`

    return html;
}

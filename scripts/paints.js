import { ChangeEventListener, getPaint, } from "./database.js";

const paints = getPaint();


export const selectPaint = () => {

    const paintOptions = paints.map((paint)=> {
        return `<option value="${paint.id}">${paint.color}</option>`
    })

    return paintOptions.join("")
}



ChangeEventListener("paint__select",paints,"paintId")

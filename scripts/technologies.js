import { ChangeEventListener, getTech } from "./database.js";

const technologies = getTech();

export const selectTech = () => {

    const optionsHTML = technologies.map((tech)=> {

        return `<option value="${tech.id}">${tech.package}</option>`
    }).join("")

    return optionsHTML
}

ChangeEventListener("tech__select",technologies,"techId")

/*
In each of the modules, generate a <select> element that has child <option> elements as HTML representation of each object in the corresponding array in the database module.<just code the html in ur render>

Add an event listener that reacts to the customer choosing one of the options.

When an option is chosen, use window.alert to display a message that says which option the user chose.
 */
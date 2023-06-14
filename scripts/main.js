import { renderHtml } from "./cars-r-us-RENDER.js"

const mainContainer = document.querySelector("#container")


// don't forget that you need a function in main to invoke your application function...
/*
the process goes like this your database holds the data,
you've got getters and setters that interact between your application and the data it's expressing.
You need a APP folder that's prety much running and creating all the html etcs
Your main.js is the bridge between the app setup so far and DOM/html.
    the main.js essentially has only code to either invoke your renderdata and refresh any elements that change state. but it's only for invokation for the most part.
*/

const render = () => {
    mainContainer.innerHTML = renderHtml();  
}

render()

document.addEventListener("stateChange", e => {
   //this is necessary to change the state
    render();
})
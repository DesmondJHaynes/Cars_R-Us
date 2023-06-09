import { selectInterior } from "./interiors.js";
import { selectPaint } from "./paints.js";
import { selectTech } from "./technologies.js";
import { selectWheels } from "./wheels.js";

export const renderHtml = () => {
    let html = `
    
`
    return html;
}

selectInterior()
selectWheels()
selectPaint()
selectTech()
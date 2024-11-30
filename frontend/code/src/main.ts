import { FullScreenImage } from "./modules/FullScreenImage.js";
import { MouseGlow } from "./modules/MouseGlow.js";

let glowEffectSites = ["index.html"]
let filePath = new URL(document.URL).pathname;
let fileName = filePath.split("/").pop();

// Load only when window is finish
window.onload = function () {
    new FullScreenImage();
}
if(glowEffectSites.includes(fileName)){
    new MouseGlow();
}


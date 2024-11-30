import { FullScreenImage } from "./modules/FullScreenImage.js";
import { MouseGlow } from "./modules/MouseGlow.js";



// Load only when window is finish
window.onload = function () {
    new FullScreenImage();
}

console.log(new URL(document.URL).pathname);
new MouseGlow();


import { FullScreenImage } from "./modules/FullScreenImage.js";
import { MouseGlow } from "./modules/MouseGlow.js";
window.onload = function () {
    new FullScreenImage();
};
console.log(new URL(document.URL).pathname);
new MouseGlow();

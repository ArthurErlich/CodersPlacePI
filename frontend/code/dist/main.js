import { FullScreenImage } from "./modules/FullScreenImage.js";
import { MouseGlow } from "./modules/MouseGlow.js";
import { TypeWriter } from "./modules/TypeWriter.js";
const glowEffectSites = ["index.html"];
const filePath = new URL(document.URL).pathname;
const fileName = filePath.split("/").pop();
window.onload = function () {
    new FullScreenImage();
    new TypeWriter();
};
if (glowEffectSites.includes(fileName)) {
    new MouseGlow();
}

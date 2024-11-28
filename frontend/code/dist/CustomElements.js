import { DialogElement } from "./customElements/DialogElement.js";
import { FooterElement } from "./customElements/FooterElement.js";
import { NaviElement } from "./customElements/NaviElement.js";
import { IndexLinkingElement } from "./customElements/IndexLinkingElement.js";
customElements.define("custom-footer", FooterElement);
customElements.define("custom-header", NaviElement);
customElements.define("custom-img-dialog", DialogElement);
customElements.define("custom-index-links", IndexLinkingElement);

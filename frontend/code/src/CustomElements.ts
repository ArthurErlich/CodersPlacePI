import { NaviElement } from "./customElements/NaviElement.js";
import { FooterElement } from "./customElements/FooterElement.js";
import { DialogElement } from "./customElements/DialogElement.js";
import { IndexLinkingElement } from "./customElements/IndexLinkingElement.js";
import { CodeBlockElement } from "./customElements/CodeBlockElement.js";

customElements.define("custom-header", NaviElement);
customElements.define("custom-footer", FooterElement);
customElements.define("custom-img-dialog", DialogElement);
customElements.define("custom-index-links", IndexLinkingElement);
customElements.define("custom-code-block", CodeBlockElement );

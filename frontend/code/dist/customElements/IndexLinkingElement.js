export class IndexLinkingElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        window.addEventListener("load", (event) => {
            this.getHTagList(["h1", "h2", "h3"]);
        });
    }
    getHTagList(selection) {
        let selectionString = selection.toString();
        let elementCollection = document.querySelectorAll(selectionString);
        console.info(elementCollection);
        return elementCollection;
    }
}

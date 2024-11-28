export class IndexLinkingElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        window.addEventListener("load", (event) => {
            this.getHTagList(["h1","h2","h3"]);
        });
    }
    private getHTagList(selection:Array<string>): NodeListOf<Element> {

        let selectionString = selection.toString();
        // retrieves the elements in the correct order
        let elementCollection: NodeListOf<Element> = document.querySelectorAll(selectionString);

        //TODO:Create Logger interface
        console.info(elementCollection);

        return elementCollection;

    }
    // Find all h1 -> h2 and h3 Elements.
    // Add Anker with indexnumber and name to hx tag
    // Create list of Links and stye them like the blog. 
}
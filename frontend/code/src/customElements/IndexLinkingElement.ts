export class IndexLinkingElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        window.addEventListener("load", (event) => {
            this.getHTagList(["h1","h2","h3"]);
        });
    }
    private getHTagList(selection:Array<string>): NodeListOf<HTMLElement> {

        let selectionString = selection.toString();
        // retrieves the elements in the correct order
        let elementCollection: NodeListOf<HTMLElement> = document.querySelectorAll(selectionString);

        //TODO:Create Logger interface
        console.info(elementCollection);

        return elementCollection;

    }
    private setAnkerPoint(headerList:NodeListOf<HTMLElement>){
        
    }
    // Find all h1 -> h2 and h3 Elements. 👍
    // Add Anker with indexnumber and name to hx tag
    // Create list of Links and stye them like the blog. 
}
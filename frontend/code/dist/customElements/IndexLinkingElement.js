export class IndexLinkingElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        window.addEventListener("load", (event) => {
            console.log("Window loaded, starting with Index creation,");
            let headerList = this.getHTagList(["h1", "h2", "h3"]);
            this.setAnkerPoint(headerList);
        });
    }
    getHTagList(selection) {
        let selectionString = selection.toString();
        let elementCollection = document.querySelectorAll(selectionString);
        console.log("Found " + elementCollection.length + " Header Elements");
        console.log(elementCollection);
        return elementCollection;
    }
    setAnkerPoint(headerList) {
        console.log("Adding anchor points");
        headerList.forEach((header, key) => {
            header.id = header.innerText.trim().replace(" ", "-") + "-" + key;
            console.log(header.id);
        });
    }
}

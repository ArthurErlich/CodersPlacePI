/*
    Find all h1 -> h2 and h3 Elements. 👍
    Add Anker with indexnumber and name to header tag 👍
    Create list of Links and stye them like the blog. 
*/
export class IndexLinkingElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        window.addEventListener("load", (event) => {
            console.log("Window loaded, starting with Index creation,")
            let headerList: NodeListOf<HTMLElement> = this.getHeaderTagList(["h1", "h2", "h3"]);
            this.setAnkerPoint(headerList);
            //TODO fll this.body with correct index, check older Blog for reference
        });
    }

    private getHeaderTagList(selection: Array<string>): NodeListOf<HTMLElement> {

        let selectionString = selection.toString();
        // retrieves the elements in the correct order
        let elementCollection: NodeListOf<HTMLElement> = document.querySelectorAll(selectionString);

        //TODO:Create Logger interface
        console.log("Found " + elementCollection.length + " Header Elements");
        console.log(elementCollection);

        return elementCollection;

    }

    private setAnkerPoint(headerList: NodeListOf<HTMLElement>): void {
        console.log("Adding anchor points");
        headerList.forEach((header, key) => {
            header.id = header.innerText.trim().replace(" ", "-") + "-" + key;
            console.log(header.id);
        });

    }

    private createIndex(headerList: NodeListOf<HTMLElement>):void {
        //h2 Table Of Contetn
        //<div id="index">
        //ul
        //li -> a
    }
}
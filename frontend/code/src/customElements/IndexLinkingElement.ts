//TODO: Add copyright
export class IndexLinkingElement extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        window.addEventListener("pageshow", (event) => {
            // console.log("Window loaded, starting with Index creation,")
            let headerList: NodeListOf<HTMLElement> = this.getHeaderTagList(["h1", "h2", "h3"]);
            this.setAnkerPoint(headerList);
            this.createIndex(headerList);
        });
    }

    private getHeaderTagList(selection: Array<string>): NodeListOf<HTMLElement> {

        let selectionString = selection.toString();
        // retrieves the elements in the correct order
        let elementCollection: NodeListOf<HTMLElement> = document.querySelectorAll(selectionString);

        //TODO:Create Logger interface
        // console.log("Found " + elementCollection.length + " Header Elements");
        // console.log(elementCollection);

        return elementCollection;

    }

    private setAnkerPoint(headerList: NodeListOf<HTMLElement>): void {
        // console.log("Adding anchor points");
        headerList.forEach((header, key) => {
            header.id = header.innerText.trim().replace(" ", "-") + "-" + key;
        });
    }

    private createIndex(headerList: NodeListOf<HTMLElement>): void {
        // console.log("Creating Table Of Content HTML Part");

        let h2Element: HTMLElement = document.createElement("h2");
        let divIndexWrapper: HTMLElement = document.createElement("div");
        let ulElement: HTMLUListElement = document.createElement("ul");
        let liElementList: Array<HTMLLIElement> = new Array();

        headerList.forEach(headerElement => {
            let liElement: HTMLLIElement = document.createElement("li");
            let linkElement: HTMLAnchorElement = document.createElement("a");
            linkElement.innerText = headerElement.innerText;
            linkElement.href = "#" + headerElement.id;
            liElement.appendChild(linkElement);
            liElementList.push(liElement);
        });

        liElementList.forEach(liElement => {
            ulElement.appendChild(liElement);
        });

        h2Element.innerText = "Table of Content";

        divIndexWrapper.appendChild(h2Element);
        divIndexWrapper.appendChild(ulElement);

        this.appendChild(divIndexWrapper);
    }
}
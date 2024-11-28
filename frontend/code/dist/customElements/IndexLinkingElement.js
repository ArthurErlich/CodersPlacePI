export class IndexLinkingElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        window.addEventListener("load", (event) => {
            let headerList = this.getHeaderTagList(["h1", "h2", "h3"]);
            this.setAnkerPoint(headerList);
            this.createIndex(headerList);
        });
    }
    getHeaderTagList(selection) {
        let selectionString = selection.toString();
        let elementCollection = document.querySelectorAll(selectionString);
        return elementCollection;
    }
    setAnkerPoint(headerList) {
        headerList.forEach((header, key) => {
            header.id = header.innerText.trim().replace(" ", "-") + "-" + key;
        });
    }
    createIndex(headerList) {
        let h2Element = document.createElement("h2");
        let divIndexWrapper = document.createElement("div");
        let ulElement = document.createElement("ul");
        let liElementList = new Array();
        headerList.forEach(headerElement => {
            let liElement = document.createElement("li");
            let linkElement = document.createElement("a");
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

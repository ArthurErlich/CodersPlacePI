export class CodeBlockElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.getFormattedContent();
    }
    getFormattedContent() {
        let rawText = this.innerHTML;
        console.log(rawText);
        return "";
    }
}

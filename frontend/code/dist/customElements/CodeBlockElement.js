export class CodeBlockElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.getFormattedContent();
    }
    getFormattedContent() {
        let rawText = this.innerHTML;
        let rawTextLine = rawText.split("\n");
        let leadingWhiteSpadeCount;
        if (rawTextLine[0] == "") {
            rawTextLine.shift();
        }
        leadingWhiteSpadeCount = rawTextLine[0].search(/\S|$/);
        console.log(rawTextLine);
        return "";
    }
}

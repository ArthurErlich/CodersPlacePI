export class CodeBlockElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.getFormattedContent();
    }
    getFormattedContent() {
        let text = this.innerHTML;
        let rawTextLines = text.split("\n");
        let leadingWhiteSpace;
        this.removeLineIfEmpty(rawTextLines, 0);
        leadingWhiteSpace = rawTextLines[0].search(/\S|$/);
        for (let i = 0; i < rawTextLines.length; i++) {
            rawTextLines[i] = rawTextLines[i].slice(leadingWhiteSpace);
        }
        this.removeLineIfEmpty(rawTextLines, rawTextLines.length - 1);
        for (let i = 0; i < rawTextLines.length; i++) {
            rawTextLines[i] += "<br>";
        }
        text = rawTextLines.join("");
        this.innerHTML = text;
        return text;
    }
    removeLineIfEmpty(textLines, index) {
        console.log("Removing line " + textLines[index]);
        if (textLines[index] == "") {
            textLines.splice(index, 1);
        }
        return textLines;
    }
}

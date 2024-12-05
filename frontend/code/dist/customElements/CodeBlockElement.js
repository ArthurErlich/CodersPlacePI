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
        rawTextLines = this.removeLineIfEmpty(rawTextLines, 0);
        rawTextLines = this.replaceLeadingWhitespace(rawTextLines);
        rawTextLines = this.removeLineIfEmpty(rawTextLines, rawTextLines.length - 1);
        rawTextLines = this.preserveCodeIndentation(rawTextLines);
        text = rawTextLines.join("");
        this.innerHTML = text;
    }
    removeLineIfEmpty(textLines, index) {
        if (textLines[index] == "") {
            textLines.splice(index, 1);
        }
        return textLines;
    }
    replaceLeadingWhitespace(textLines) {
        let leadingWhiteSpace;
        leadingWhiteSpace = textLines[0].search(/\S|$/);
        for (let i = 0; i < textLines.length; i++) {
            textLines[i] = textLines[i].slice(leadingWhiteSpace);
        }
        return textLines;
    }
    preserveCodeIndentation(textLines) {
        for (let i = 0; i < textLines.length; i++) {
            textLines[i] += "<br>";
        }
        return textLines;
    }
}

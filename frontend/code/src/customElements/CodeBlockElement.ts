export class CodeBlockElement extends HTMLElement {

    //TODO:  Code Tog,There is some Styling wich needs to be moved!

    constructor() {
        super();
    }
    connectedCallback() {
        this.getFormattedContent();
    }

    //TODO: Add return!
    private getFormattedContent(): void {
        //TODO:Move var scope to top
        let text: string = this.innerHTML;
        let rawTextLines: Array<string> = text.split("\n");

        //remove fist return of code block with no text
        rawTextLines = this.removeLineIfEmpty(rawTextLines, 0);

        //removes the leading whitespace, coming from the element indentation in HTML code
        rawTextLines = this.replaceLeadingWhitespace(rawTextLines);

        //remove last line if there is no text. Cleans up the last "" empty string
        rawTextLines = this.removeLineIfEmpty(rawTextLines, rawTextLines.length - 1);

        //replaces leading whitespace and 
        rawTextLines = this.preserveCodeIndentation(rawTextLines);

        text = rawTextLines.join("");
        this.innerHTML =text;

    }

    private removeLineIfEmpty(textLines: Array<string>, index: number): Array<string> {
        if (textLines[index] == "") {
            textLines.splice(index, 1);
        }
        return textLines;
    }

    private replaceLeadingWhitespace(textLines: Array<string>): Array<string> {
        let leadingWhiteSpace: number;
        leadingWhiteSpace = textLines[0].search(/\S|$/);

        for (let i = 0; i < textLines.length; i++) {
            textLines[i] = textLines[i].slice(leadingWhiteSpace);
        }
        return textLines;
    }

    private preserveCodeIndentation(textLines: Array<string>): Array<string> {
        for (let i = 0; i < textLines.length; i++) {
            textLines[i] += "<br>";
        }
        return textLines;
    }
}
export class CodeBlockElement extends HTMLElement {

    //TODO:  Code Tog,There is some Styling wich needs to be moved!

    constructor() {
        super();
    }
    connectedCallback() {
        this.getFormattedContent();
    }

    private getFormattedContent(): string {
        let text: string = this.innerHTML;
        let rawTextLines: Array<string> = text.split("\n");
        let leadingWhiteSpace: number;

        //remove fist return of code block with no text
        this.removeLineIfEmpty(rawTextLines, 0);

        leadingWhiteSpace = rawTextLines[0].search(/\S|$/);

        //removes the leading whitespace, coming from the element indentation in HTML code
        for (let i = 0; i < rawTextLines.length; i++) {
            rawTextLines[i] = rawTextLines[i].slice(leadingWhiteSpace);
        }

        //remove last line if there is no text. Cleans up the last "" empty string
        this.removeLineIfEmpty(rawTextLines, rawTextLines.length-1);

        for (let i = 0; i < rawTextLines.length; i++) {
            //TODO: replace whitespace with &nbsp;
            rawTextLines[i] += "<br>";
        }
        text = rawTextLines.join("");

        //TODO:remove test
        this.innerHTML = text;

        return text;
    }

    private removeLineIfEmpty(textLines: Array<string>, index: number): Array<string> {
        console.log("Removing line " + textLines[index]);
        if (textLines[index] == "") {
            textLines.splice(index,1);
        }
        
        return textLines;
    }
}
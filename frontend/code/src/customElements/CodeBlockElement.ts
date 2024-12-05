export class CodeBlockElement extends HTMLElement {

    //TODO:  Code Tog,There is some Styling wich needs to be moved!

    constructor() {
        super();
    }
    connectedCallback() {
        this.getFormattedContent();
    }

    private getFormattedContent(): string {
        let rawText: string = this.innerHTML;
        let rawTextLine: Array<string> = rawText.split("\n");
        let leadingWhiteSpadeCount: number;

        if (rawTextLine[0] == "") {
            rawTextLine.shift();
        }

        leadingWhiteSpadeCount = rawTextLine[0].search(/\S|$/);

        // TODO: Iterate over string and replace whitespace!
        // rawTextLine.forEach(line =>{
        //     rawTextLine[] = line.substring(leadingWhiteSpadeCount);
        // });
        console.log(rawTextLine);

        return "";
    }
}
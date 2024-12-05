export class CodeBlockElement extends HTMLElement {

    //TODO:  Code Tog,There is some Styling wich needs to be moved!

    constructor() {
        super();
    }
    connectedCallback() {
        this.getFormattedContent();
    }

    private getFormattedContent(): string {
        let rawText:string = this.innerHTML;
        console.log(rawText);
        
        return "";
    }
}
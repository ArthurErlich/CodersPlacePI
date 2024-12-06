export class TypeWriter {
    private text: Array<string> = ["Your Idea.", "Our Plan.", "My Work.", "Your Website."];
    private typeWriterElement: HTMLElement;
    private textToWrite: string = "";
    private timeOutObj: ReturnType<typeof setTimeout>;
    private removeText: boolean = false;
    private index: number = 0;

    constructor() {
        this.typeWriterElement = document.getElementById("hero_typewriter");
        if (this.typeWriterElement == null) {
            console.warn("Typewriter not found!");
            return;
        }
        this.typeWriterElement.innerText = "";
        this.update();
    }

    private update(): void {
        clearTimeout(this.timeOutObj);

        if (this.index >= this.text.length) {
            this.index = 0;
        }
        if (!this.removeText) {
            this.typeWord(this.text[this.index]);
        } else {
            this.removeLetter();
        }
    }
    private typeWord(word: string): void {
        let typeTime: number = (Math.random() * 200) + 100;

        if (this.textToWrite.length <= 0) {
            this.textToWrite = word;
        }
        if (this.typeWriterElement.textContent.length >= word.length) {
            this.removeText = true;
            this.textToWrite = "";
            clearTimeout(this.timeOutObj);
            this.timeOutObj = setTimeout(() => this.update(), 3000);
            return;
        }
        let letter: string = this.textToWrite.charAt(0);
        this.addLetter(letter);
        this.textToWrite = this.textToWrite.slice(1);
        this.timeOutObj = setTimeout(() => this.update(), typeTime);
    }

    private addLetter(letter: string): void {
        this.typeWriterElement.textContent += letter;
    }
    private removeLetter(): void {
        let typeTime: number = (Math.random() * 100) + 40;
        this.typeWriterElement.textContent = this.typeWriterElement.textContent.slice(0, this.typeWriterElement.textContent.length - 1);
        if (this.typeWriterElement.textContent.length <= 0) {
            this.removeText = false;
            this.index++;
        }
        this.timeOutObj = setTimeout(() => this.update(), typeTime);
    }

}
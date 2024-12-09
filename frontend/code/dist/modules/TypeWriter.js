export class TypeWriter {
    constructor() {
        this.text = ["Your Idea.", "Our Plan.", "My Work.", "Your Website."];
        this.textToWrite = "";
        this.removeText = false;
        this.index = 0;
        this.typeWriterElement = document.getElementById("hero_typewriter");
        if (this.typeWriterElement == null) {
            console.warn("Typewriter not found!");
            return;
        }
        this.typeWriterElement.innerText = "";
        this.update();
    }
    update() {
        clearTimeout(this.timeOutObj);
        if (this.index >= this.text.length) {
            this.index = 0;
        }
        if (!this.removeText) {
            this.typeWord(this.text[this.index]);
        }
        else {
            this.removeLetter();
        }
    }
    typeWord(word) {
        let typeTime = (Math.random() * 200) + 100;
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
        let letter = this.textToWrite.charAt(0);
        this.addLetter(letter);
        this.textToWrite = this.textToWrite.slice(1);
        this.timeOutObj = setTimeout(() => this.update(), typeTime);
    }
    addLetter(letter) {
        this.typeWriterElement.textContent += letter;
    }
    removeLetter() {
        let typeTime = (Math.random() * 100) + 40;
        this.typeWriterElement.textContent = this.typeWriterElement.textContent.slice(0, this.typeWriterElement.textContent.length - 1);
        if (this.typeWriterElement.textContent.length <= 0) {
            this.removeText = false;
            this.index++;
        }
        this.timeOutObj = setTimeout(() => this.update(), typeTime);
    }
}

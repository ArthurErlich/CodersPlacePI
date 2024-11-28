export class FullScreenImage {
    constructor() {
        try {
            this.imageList = document.getElementsByTagName("img");
            this.imageDialog = document.getElementById("image_dialog");
            this.imageContainer = this.imageDialog.getElementsByClassName("full_screen_image_card")[0];
            this.closeBtn = document.getElementById("image_dialog_close_btn");
            this.addFullScreenImageModal();
        }
        catch (error) {
            console.warn("Some HTML Tags are not found: " + error);
            return;
        }
    }
    addFullScreenImageModal() {
        if (this.imageDialog == null || this.imageContainer == null) {
            console.warn("not found on this page, skipping");
            return;
        }
        this.closeBtn.addEventListener("click", () => this.closeDialog());
        if (this.imageList.length == 0) {
            return;
        }
        for (let i = 0; i < this.imageList.length; i++) {
            this.imageList.item(i).addEventListener("click", () => this.showDialog(event));
        }
    }
    showDialog(event) {
        let imgEvent = event.target;
        let newImageElement;
        let oldImageElements = this.imageContainer.getElementsByTagName("img");
        try {
            newImageElement = imgEvent;
        }
        catch (error) {
            console.warn(error);
            return;
        }
        if (oldImageElements.length > 0) {
            for (let i = 0; i < oldImageElements.length; i++) {
                oldImageElements[i].remove();
            }
        }
        let fullImg = document.createElement("img");
        fullImg.src = newImageElement.src;
        fullImg.alt = newImageElement.alt;
        fullImg.loading = "lazy";
        this.imageContainer.append(fullImg);
        this.imageDialog.showModal();
    }
    closeDialog() {
        this.imageDialog.close();
    }
}

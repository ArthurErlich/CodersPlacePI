export class FullScreenImage {
    constructor() {
        this.imageList = document.getElementsByTagName("img");
        this.imageDialog = document.getElementById("image_dialog");
        this.imageContainer = this.imageDialog.getElementsByClassName("full_screen_image_container")[0];
        this.addFullScreenImageModal();
    }
    addFullScreenImageModal() {
        //avoid adding the event on images when the dialog/modal element is missing.
        if (this.imageDialog == null || this.imageContainer == null) {
            console.warn("not found on this page, skipping");
            return;
        }
        //add on click functionality
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
        console.log(oldImageElements.length);
        if (oldImageElements.length > 0) {
            for (let i = 0; i < oldImageElements.length; i++) {
                console.info("Removing from Modal:" + oldImageElements[i]);
                oldImageElements[i].remove();
            }
        }
        console.log(newImageElement.src);
        //Check if image exists!
        let fullImg = document.createElement("img");
        fullImg.src = newImageElement.src;
        fullImg.alt = newImageElement.alt;
        fullImg.loading = "lazy";
        this.imageContainer.append(fullImg);
        this.imageDialog.showModal();
    }
}

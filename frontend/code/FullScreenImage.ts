
export class FullScreenImage {
    private imageList: HTMLCollectionOf<HTMLImageElement>;
    private imageDialog: HTMLDialogElement;
    private imageContainer: HTMLElement;


    public constructor() {
        this.imageList = document.getElementsByTagName("img");
        this.imageDialog = document.getElementById("image_dialog") as HTMLDialogElement;
        this.imageContainer = this.imageDialog.getElementsByClassName("full_screen_image_card")[0] as HTMLElement;
        this.addFullScreenImageModal();
    }
    private addFullScreenImageModal(): void {
        //avoid adding the event on images when the dialog/modal element is missing.
        if (this.imageDialog == null || this.imageContainer == null) {
            console.warn("not found on this page, skipping");
            return;
        }
        //add on click functionality
        if (this.imageList.length == 0) {
            return;
        }
        for (let i: number = 0; i < this.imageList.length; i++) {
            this.imageList.item(i).addEventListener("click", () => this.showDialog(event));
        }
    }
    public showDialog(event: Event): void {
        let imgEvent: EventTarget = event.target;
        let newImageElement: HTMLImageElement;
        let oldImageElements: HTMLCollectionOf<HTMLElement> = this.imageContainer.getElementsByTagName("img");
        try {
            newImageElement = imgEvent as HTMLImageElement;
        } catch (error) {
            console.warn(error);
            return;
        }
        console.log(oldImageElements.length);

        if (oldImageElements.length > 0) {
            for (let i: number = 0; i < oldImageElements.length; i++) {
                console.info("Removing from Modal:" + oldImageElements[i]);
                oldImageElements[i].remove();
            }
        }
        console.log(newImageElement.src);
        //Check if image exists!
        let fullImg: HTMLImageElement = document.createElement("img");
        fullImg.src = newImageElement.src;
        fullImg.alt = newImageElement.alt;
        fullImg.loading = "lazy";
        this.imageContainer.append(fullImg);
        this.imageDialog.showModal();
    }
}


export class FullScreenImage {
    private imageList: HTMLCollectionOf<HTMLImageElement>;
    private imageDialog: HTMLDialogElement;
    private imageContainer: HTMLElement;
    private closeBtn:HTMLElement;


    public constructor() {
        this.imageList = document.getElementsByTagName("img");
        this.imageDialog = document.getElementById("image_dialog") as HTMLDialogElement;
        this.imageContainer = this.imageDialog.getElementsByClassName("full_screen_image_card")[0] as HTMLElement;
        this.closeBtn = document.getElementById("image_dialog_close_btn");
        this.addFullScreenImageModal();
    }
    private addFullScreenImageModal(): void {
        //avoid adding the event on images when the dialog/modal element is missing.
        if (this.imageDialog == null || this.imageContainer == null) {
            console.warn("not found on this page, skipping");
            return;
        }
        //adds an event to close the image if the backdrop or the close button is clicked
        //TODO:add Backdrop
        this.closeBtn.addEventListener("click", () => this.closeDialog());
        //add on click functionality, only if an image exist on the page
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

        if (oldImageElements.length > 0) {
            for (let i: number = 0; i < oldImageElements.length; i++) {
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
    public closeDialog():void{
        this.imageDialog.close();
    }
}

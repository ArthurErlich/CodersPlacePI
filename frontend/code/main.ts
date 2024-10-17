namespace codersPlace {
    class FullScreenImage {
        private imageList: HTMLCollectionOf<HTMLImageElement>;
        private imageDialog: HTMLDialogElement;
        private imageContainer: HTMLElement;


        public constructor() {
            this.imageList = document.getElementsByTagName("img");
            this.imageDialog = document.getElementById("image_dialog") as HTMLDialogElement;
            this.imageContainer = this.imageDialog.getElementsByClassName("full_screen_image_container")[0] as HTMLElement;
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
            let img: HTMLImageElement;
            try {
                img = imgEvent as HTMLImageElement;
            } catch (error) {
                console.warn(error);
                return;
            }
            console.log(img.src);
            document.body.style.overflow = "hidden";
            //Check if image exists!
            let fullImg: HTMLImageElement = document.createElement("img");
            fullImg.src = img.src;
            fullImg.alt = img.alt;
            fullImg.loading ="lazy";
            this.imageContainer.append(fullImg);
            this.imageDialog.showModal();
        }
    }
    let fullScreenImage: FullScreenImage = new FullScreenImage();

}
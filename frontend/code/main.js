var codersPlace;
(function (codersPlace) {
    class FullScreenImage {
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
            let img;
            try {
                img = imgEvent;
            }
            catch (error) {
                console.warn(error);
                return;
            }
            console.log(img.src);
            document.body.style.overflow = "hidden";
            //Check if image exists!
            let fullImg = document.createElement("img");
            fullImg.src = img.src;
            fullImg.alt = img.alt;
            fullImg.loading = "lazy";
            this.imageContainer.append(fullImg);
            this.imageDialog.showModal();
        }
    }
    let fullScreenImage = new FullScreenImage();
})(codersPlace || (codersPlace = {}));

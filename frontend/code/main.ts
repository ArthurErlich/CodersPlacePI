namespace codersPlace {
    let imageList: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName("img");
    let imageDialog: HTMLDialogElement = document.getElementById("imageDialog") as HTMLDialogElement;

    //DEBUG DIALOG FOR STYLING
    //TODO:REMOVE!
    imageDialog.showModal();
    //
    addFullScreenImageModal();

    function addFullScreenImageModal(): void {
        //avoid adding the event on images when the dialog/modal element is missing.
        if (imageDialog == null) {
            console.warn("imageDialog not found on this page");
            return;
        }
        //add on click functionality
        if (imageList.length == 0) {
            return;
        }

        for (let i: number = 0; i < imageList.length; i++) {
            imageList.item(i).addEventListener("click", function (event) {
                let imgEvent: EventTarget = event.target;
                let img: HTMLImageElement;
                try {
                    img = imgEvent as HTMLImageElement;
                } catch (error) {
                    return;
                }
                console.log(img.src);
                imageDialog.showModal();
            });
        }
    }
}
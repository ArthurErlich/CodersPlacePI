namespace codersPlace {
    let imageList: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName("img");
    addFullScreenImageModal();

    function addFullScreenImageModal(): void {
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
                    console.log(img.src);
                } catch (error) {
                    return;
                }
            });
        }
    }
}
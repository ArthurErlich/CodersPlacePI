var codersPlace;
(function (codersPlace) {
    let imageList = document.getElementsByTagName("img");
    console.log(imageList);
    addFullScreenImageModal();
    function addFullScreenImageModal() {
        if (imageList.length == 0) {
            return;
        }
        for (let i = 0; i < imageList.length; i++) {
            imageList.item(i).addEventListener("click", function (event) {
                let imgEvent = event.target;
                let img;
                try {
                    img = imgEvent;
                    console.log(img.src);
                }
                catch (error) {
                    return;
                }
            });
        }
    }
})(codersPlace || (codersPlace = {}));

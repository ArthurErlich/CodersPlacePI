var codersPlace;
(function (codersPlace) {
    let imageList = document.getElementsByTagName("img");
    let imageDialog = document.getElementById("imageDialog");
    //DEBUG DIALOG FOR STYLING
    //TODO:REMOVE!
    showDialog();
    //
    addFullScreenImageModal();
    function addFullScreenImageModal() {
        //avoid adding the event on images when the dialog/modal element is missing.
        if (imageDialog == null) {
            console.warn("imageDialog not found on this page");
            return;
        }
        //add on click functionality
        if (imageList.length == 0) {
            return;
        }
        for (let i = 0; i < imageList.length; i++) {
            imageList.item(i).addEventListener("click", function (event) {
                let imgEvent = event.target;
                let img;
                try {
                    img = imgEvent;
                }
                catch (error) {
                    return;
                    console.log(img.src);
                }
            });
        }
    }
    function showDialog() {
        document.body.style.overflow = "hidden";
        imageDialog.showModal();
    }
})(codersPlace || (codersPlace = {}));

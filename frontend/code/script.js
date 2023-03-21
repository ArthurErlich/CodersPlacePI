"use strict";
var codersPlace;
(function (codersPlace) {
    const windowCloser = document.getElementById("windowCloser");
    const windowOpener = document.getElementById("windowOpener");
    //check bodyTextElements name -> changed from bodyLinkt to bodyText
    let bodyIndexElement = document.getElementById("bodyIndex");
    let bodyTextElements = document.getElementsByClassName("bodyText");
    windowCloser.addEventListener("click", function (event) {
        closeWindow(); // add event.target later for multiply windows
    });
    windowOpener.addEventListener("click", function (event) {
        openWindow(); // add event.target later for multiply windows
    });
    setIndexNumber(3);
    //this is a new addition
    function closeWindow() {
        for (let i = 0; i < bodyTextElements.length; i++) {
            console.log(bodyTextElements.item(i).style.display);
            bodyTextElements.item(i).style.display = "none";
        }
        bodyIndexElement.style.display = "none";
    }
    function openWindow() {
        for (let i = 0; i < bodyTextElements.length; i++) {
            console.log(bodyTextElements.item(i).style.display);
            bodyTextElements.item(i).style.display = "block";
        }
        bodyIndexElement.style.display = "block";
    }
    function setIndexNumber(indexSpacing) {
        console.log(bodyTextElements);
        console.log(document.querySelectorAll("bodyLink"));
        for (let i = 0; i < (bodyTextElements.length + 1) * indexSpacing; i++) {
            if (i <= 9) {
                bodyIndexElement.innerText += "00" + i + "\n";
            }
            else if (i <= 99) {
                bodyIndexElement.innerText += "0" + i + "\n";
            }
            else {
                bodyIndexElement.innerText += i.toString() + "\n";
            }
        }
    }
})(codersPlace || (codersPlace = {}));

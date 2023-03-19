"use strict";
var codersPlace;
(function (codersPlace) {
    const windowCloser = document.getElementById("windowCloser");
    let indexSpacing = 3;
    setIndexNumber();
    function setIndexNumber() {
        let bodyIndexElement = document.getElementById("bodyIndex");
        let bodyLinkElements = Array.from(document.getElementsByClassName("bodyLink"));
        console.log(bodyLinkElements);
        console.log(document.querySelectorAll("bodyLink"));
        for (let i = 0; i < (bodyLinkElements.length + 1) * indexSpacing; i++) {
            if (i <= 9) {
                bodyIndexElement.innerText += "00" + i + "\n";
                console.log("00" + i + "\n");
            }
            else if (i <= 99) {
                bodyIndexElement.innerText += "0" + i + "\n";
                console.log("0" + i + "\n");
            }
            else {
                bodyIndexElement.innerText += i.toString() + "\n";
                console.log(i.toString() + "\n");
            }
        }
    }
})(codersPlace || (codersPlace = {}));

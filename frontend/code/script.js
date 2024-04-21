"use strict";
var codersPlace;
(function (codersPlace) {
    const windowCloser = document.getElementById("windowCloser");
    const windowOpener = document.getElementById("windowOpener");
    //check bodyTextElements name -> changed from bodyLinkt to bodyText
    let bodyIndexElement = document.getElementById("bodyIndex");
    let bodyTextElements = document.getElementsByTagName("p");
    windowCloser.addEventListener("click", function (event) {
        closeWindow(); // add event.target later for multiply windows
    });
    windowOpener.addEventListener("click", function (event) {
        openWindow(); // add event.target later for multiply windows
    });
    setIndexNumber(1.5);
    createFooter();
    //this is a new addition
    function closeWindow() {
        for (let i = 0; i < bodyTextElements.length; i++) {
            // console.log((<HTMLElement>bodyTextElements.item(i)).style.display);
            bodyTextElements.item(i).style.display = "none";
        }
        bodyIndexElement.style.display = "none";
    }
    function openWindow() {
        for (let i = 0; i < bodyTextElements.length; i++) {
            // console.log((<HTMLElement>bodyTextElements.item(i)).style.display);
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
function createFooter() {
    let footer = document.getElementsByTagName("footer");
    if (footer === null) {
        return;
    }
    footer[0].innerHTML = ` 
    <div class="footerLinkGroupe">
            <div class="footerLinkItem">
               <a href="datenschutz.html">Datenschutz</a> 
            </div>
            <div class="footerLinkItem">
               <a href="impressum.html">Impressum</a> 
            </div>
        </div>
        <div class="footerLinkGroupe">
        </div>
        <div class="footerLinkGroupe">
        </div>
        <div class="footerLinkGroupe">
        </div>
    `;
}

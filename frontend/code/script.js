"use strict";
var codersPlace;
(function (codersPlace) {
    const windowCloser = document.getElementById("windowCloser");
    const windowOpener = document.getElementById("windowOpener");
    //check bodyTextElements name -> changed from bodyLinkt to bodyText
    let bodyIndexElement = document.getElementById("bodyIndex");
    let bodyContentElements = document.getElementsByClassName("bodyContent");
    let paragrphElements = document.getElementsByTagName("p");
    windowCloser.addEventListener("click", function (event) {
        closeWindow(); // add event.target later for multiply windows
    });
    windowOpener.addEventListener("click", function (event) {
        openWindow(); // add event.target later for multiply windows
    });
    setIndexNumber();
    createFooter();
    createSiteLinks();
    //this is a new addition
    function closeWindow() {
        for (let i = 0; i < bodyContentElements.length; i++) {
            // console.log((<HTMLElement>bodyTextElements.item(i)).style.display);
            bodyContentElements.item(i).style.display = "none";
        }
        bodyIndexElement.style.display = "none";
    }
    function openWindow() {
        for (let i = 0; i < bodyContentElements.length; i++) {
            // console.log((<HTMLElement>bodyTextElements.item(i)).style.display);
            bodyContentElements.item(i).style.display = "block";
        }
        bodyIndexElement.style.display = "block";
    }
    function setIndexNumber() {
        // console.log(bodyTextElements);
        // console.log(document.querySelectorAll("bodyLink"));
        let textHight;
        if (paragrphElements.length == 0) {
            textHight = 1;
        }
        else {
            textHight = parseInt(window.getComputedStyle(paragrphElements[0]).fontSize, 10);
        }
        let rows = Math.round(bodyContentElements[0].offsetHeight / textHight);
        for (let i = 0; i < (rows); i++) {
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
    if (footer.length == 0) {
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
function createSiteLinks() {
    let siteLinks = document.getElementsByClassName("siteLinks");
    if (siteLinks.length == 0) {
        return;
    }
    siteLinks[0].innerHTML = `
   <div class="home">
        <a href="index.html">
            <img src="../icon/text-file-icon.svg" alt="TextFile"/>
            <p>home.h</p>
        </a>
    </div>

    <div class="home">
    <a href="programs.html">
        <img src="../icon/text-file-icon.svg" alt="TextFile"/>
        <p>programs.h</p>
    </a>
    </div>
   `;
}

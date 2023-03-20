namespace codersPlace {

    const windowCloser: HTMLElement = document.getElementById("windowCloser");
    const windowOpener: HTMLElement = document.getElementById("windowOpener");
    
    //check bodyTextElements name -> changed from bodyLinkt to bodyText
    let bodyIndexElement: HTMLElement = document.getElementById("bodyIndex");
    let bodyTextElements: HTMLElement[] = Array.from(document.getElementsByClassName("bodyText"));

    windowCloser.addEventListener("click", function(event){
        closeWindow()// add event.target later for multiply windows
    });


    setIndexNumber(3);



    //this is a new addition
    function closeWindow(){
        for (let i: number =0; i < bodyTextElements.length; i++){
            bodyTextElements[i].style.display = "hidden";
        }

    }

    function setIndexNumber(indexSpacing: number): void {
        console.log(bodyTextElements);
        console.log(document.querySelectorAll("bodyLink"));


        for (let i = 0; i < (bodyTextElements.length + 1) * indexSpacing; i++) {
            if (i <= 9) {
                bodyIndexElement.innerText += "00" + i + "\n";
                console.log("00" + i + "\n");

            } else if (i <= 99) {
                bodyIndexElement.innerText += "0" + i + "\n";
                console.log("0" + i + "\n");

            } else {
                bodyIndexElement.innerText += i.toString() + "\n";
                console.log(i.toString() + "\n");
            }
        }
    }
}
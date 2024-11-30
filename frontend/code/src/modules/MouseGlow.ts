export class MouseGlow {
    /*
    create DivContainer free floating
    onMouseMove
        get mouse pos,
        set DivContainer to mouse pos 
        hide Element if not visible or out of window
        Hide when stop moving
    */
    private mouseX: number;
    private mouseY: number;
    private size: number = 0;
    private halfSize: number = (this.size/2);
    private glowColor: string = "black";

    private glowDiv: HTMLElement;

    constructor() {
        this.glowDiv = this.createGlowDiv();
        document.addEventListener("mousemove", (event) => {
            
            this.mouseX = event.x;
            this.mouseY = event.y;

            if (this.glowDiv != null) {
                this.glowDiv.style.left = this.mouseX - this.halfSize + "px";
                this.glowDiv.style.top = this.mouseY - this.halfSize  + "px";
            }
        });
    }
    
    private createGlowDiv(): HTMLElement {
        let element: HTMLElement = document.createElement("div");
        element.style.width = this.size + "px";
        element.style.height = this.size + "px";
        element.style.backgroundColor = this.glowColor;
        element.style.position = "fixed";
        element.classList.add("mouse_glow");
        element.style.zIndex = "-1";
        element.style.borderRadius = "100%"
        element.style.boxShadow = "0px 0px 70px 20px rgba(125,0,0,0.9)";
        document.body.appendChild(element);
        return element;
    }


}
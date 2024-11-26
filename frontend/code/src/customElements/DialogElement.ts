export class DialogElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <dialog id="image_dialog">
                <div id="image_dialog_container">
                    <div class="image_dialog_header">
                        <div id="image_dialog_close_btn">
                            X
                        </div>
                    </div>
                    <div class="full_screen_image_card">
                        <!-- JS Image PlaceHolder -->
                    </div>
                </div>
            </dialog>
            `
    }
}
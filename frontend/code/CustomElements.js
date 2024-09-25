"use strict";
var codersPlace;
(function (codersPlace) {
    class FooterElement extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `<br>Hi, i am the FOOTER!<br>`;
        }
    }
    class NaviElement extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <nav>
                <a href="/frontend/html/index.html"><div>Home</div></a>
                <a href="/frontend/html/blog/blog_index.html"><div>Blog</div></a>
                <a href="/frontend/html/about-me.html"><div>About Me</div></a>
            </nav>
            `;
        }
    }
    customElements.define("custom-footer", FooterElement);
    customElements.define("custom-header", NaviElement);
})(codersPlace || (codersPlace = {}));

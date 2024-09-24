"use strict";
var codersPlace;
(function (codersPlace) {
    class FooterElement extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = "<br>Hello there<br>";
        }
    }
    class NaviElement extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = '<nav><a href="/frontend/html/index.html"><div>Home</div></a><a href="/frontend//html/blog/blog_index.html"><div>Blog</div></a></nav>';
        }
    }
    customElements.define("custom-footer", FooterElement);
    customElements.define("custom-header", NaviElement);
})(codersPlace || (codersPlace = {}));

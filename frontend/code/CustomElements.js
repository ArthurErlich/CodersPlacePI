var codersPlace;
(function (codersPlace) {
    class NaviElement extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <nav>
                <a href="/frontend/html/index.html"><div>Home</div></a>
                <a href="/frontend/html/blog/blog_index.html"><div>Blog</div></a>
                <a href="/frontend/html/cv.html"><div>CV</div></a>
                <a href="/frontend/html/about_me.html"><div>About-Me</div></a>
            </nav>
            `;
        }
    }
    class FooterElement extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <div><a href="https://github.com/ArthurErlich">GitHub</a></div>
            <div><a href="/frontend/html/salary_transparency.html">Salary Transparency</a></div>
            <div><a href="/frontend/html/changelog.html">Changelog</a></div>
            `;
        }
    }
    customElements.define("custom-footer", FooterElement);
    customElements.define("custom-header", NaviElement);
})(codersPlace || (codersPlace = {}));

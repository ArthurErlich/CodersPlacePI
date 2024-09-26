namespace codersPlace {
    class FooterElement extends HTMLElement{
        constructor(){
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <div><a href="https://github.com/ArthurErlich">GitHub</a></div>
            <div><a href="/frontend/html/salary_transparency.html">Salary Transparency</div>
            `;
        }
    }
    class NaviElement extends HTMLElement{
        constructor(){
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <nav>
                <a href="/frontend/html/index.html"><div>Home</div></a>
                <a href="/frontend/html/blog/blog_index.html"><div>Blog</div></a>
                <!-- <a href="/frontend/html/games/games_index.html<div>Games</div></a> -->
                <a href="/frontend/html/about_me.html"><div>About Me</div></a>
            </nav>
            `;
        }
    }
    customElements.define("custom-footer", FooterElement);
    customElements.define("custom-header",NaviElement);
}


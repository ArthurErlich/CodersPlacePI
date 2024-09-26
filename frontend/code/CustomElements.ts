namespace codersPlace {
    class FooterElement extends HTMLElement{
        constructor(){
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <div></div>
            <div></div>
            <div><a href"https://github.com/ArthurErlich">GitHub</div>
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
                <a href="/frontend/html/games/games_index.html<div>Games</div></a>
                <a href="/frontend/html/about-me.html"><div>About Me</div></a>
            </nav>
            `;
        }
    }
    customElements.define("custom-footer", FooterElement);
    customElements.define("custom-header",NaviElement);
}


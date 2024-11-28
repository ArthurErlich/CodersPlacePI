export class NaviElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <nav class="no_print">
                <a href="/frontend/html/index.html"><div>Home</div></a>
                <a href="/frontend/html/blog/blog_index.html"><div>Blog</div></a>
                <a href="/frontend/html/cv.html"><div>CV</div></a>
                <a href="/frontend/html/about_me.html"><div>About-Me</div></a>
            </nav>
            `;
    }
}
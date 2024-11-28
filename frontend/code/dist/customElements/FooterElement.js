export class FooterElement extends HTMLElement {
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

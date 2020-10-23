import { ApplicationElement, Layout } from 'puix';

export default class PuixDev extends ApplicationElement {
    constructor() {
        super();
        this.name = 'PuixDev';
        this.layout = Layout.VERTICAL;
        console.log(this.name);
    }
}
customElements.define('puix-dev', PuixDev);

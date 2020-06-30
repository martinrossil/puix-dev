import { ApplicationElement, AppBar } from 'puix';

export default class PuixDev extends ApplicationElement {
    constructor() {
        super();
        this.name = 'PuixDev';
        this.addElement(new AppBar());
    }
}
customElements.define('puix-dev', PuixDev);

import { ApplicationElement, AppBar, DataCard } from 'puix';

export default class PuixDev extends ApplicationElement {
    constructor() {
        super();
        this.name = 'PuixDev';
        this.addElement(new AppBar());
        this.addElement(new DataCard());
    }
}
customElements.define('puix-dev', PuixDev);

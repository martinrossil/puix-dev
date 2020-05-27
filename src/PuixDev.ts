import { ApplicationElement, AnchorLayout, AppBar, DataCard } from 'puix';

export default class PuixDev extends ApplicationElement {
    constructor() {
        super();
        this.name = 'PuixDev';
        this.backgroundColor = this.theme.colors.neutral.c50;
        this.layout = new AnchorLayout();
        this.addElement(new AppBar());
        this.addElement(new DataCard());
    }
}
customElements.define('puix-dev', PuixDev);

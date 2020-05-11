import { ApplicationElement, AnchorLayout, Theme, Color } from 'puix';
import Appbar from './AppBar';
import DataCard from './DataCard';
export default class PuixDev extends ApplicationElement {
    constructor() {
        super();
        Theme.NEUTRAL_COLOR = new Color(217, 10);
        Theme.PRIMARY_COLOR = new Color(234);
        this.backgroundColor = Theme.NEUTRAL_COLOR.index[0];
        this.name = 'PuixDev';
        this.layout = new AnchorLayout();
        this.addElement(new Appbar());
        this.addElement(new DataCard());
    }
}
customElements.define('puix-dev', PuixDev);

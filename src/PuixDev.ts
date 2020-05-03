import { DisplayElement, IDisplayElement, LayoutContainer } from 'puix';
export default class PuixDev extends LayoutContainer {
    constructor() {
        super();
        console.log('PuixDev', 'super()');
        console.log(this.name, 'super()');
        this.backgroundColor = 'red';
        const d: IDisplayElement = new DisplayElement();
        d.setSize(300, 50);
        d.backgroundColor = 'green';
        this.addElement(d);
        const d2: IDisplayElement = new DisplayElement();
        d2.setSize(50, 300);
        d2.backgroundColor = 'blue';
        this.addElement(d2);
    }
}
customElements.define('puix-dev', PuixDev);

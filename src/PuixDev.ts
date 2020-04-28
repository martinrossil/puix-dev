import { DisplayElement } from 'puix';
export default class PuixDev extends DisplayElement {
    constructor() {
        super();
        console.log('PuixDev', 'super()');
    }
}
customElements.define('puix-dev', PuixDev);

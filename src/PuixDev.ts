import { DisplayElement } from 'puix';
export default class PuixDev extends DisplayElement {
    constructor() {
        super();
        this.dispatchEventWith('test', this)
    }
}
customElements.define('puix-dev', PuixDev);

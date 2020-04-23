import { greet } from 'puix';
export default class PuixDev extends HTMLElement {
    constructor() {
        super();
        console.log('PuixDev constructor()');
        greet();
    }
}
customElements.define('puix-dev', PuixDev);

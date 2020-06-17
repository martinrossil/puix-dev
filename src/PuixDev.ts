import { ApplicationElement, AnchorLayoutData, RippleComponent } from 'puix';

export default class PuixDev extends ApplicationElement {
    constructor() {
        super();
        this.name = 'PuixDev';
        this.addElement(this.rc);
    }

    private _rc: RippleComponent | null = null;

    protected get rc(): RippleComponent {
        if (!this._rc) {
            this._rc = new RippleComponent();
            this._rc.setSize(200, 200);
            this._rc.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        }
        return this._rc;
    }
}
customElements.define('puix-dev', PuixDev);

import { ApplicationElement, IButtonComponent, ButtonComponent, Icons } from 'puix';

export default class PuixDev extends ApplicationElement {
    constructor() {
        super();
        this.name = 'PuixDev';
        this.addElement(this.button);
    }

    protected _button!: IButtonComponent;

    protected get button(): IButtonComponent {
        if (!this._button) {
            this._button = new ButtonComponent();
            this._button.icon = Icons.EMAIL;
            this._button.label = 'Click me';
            this._button.horizontalCenter = 0;
            this._button.verticalCenter = 0;
        }
        return this._button;
    }
}
customElements.define('puix-dev', PuixDev);

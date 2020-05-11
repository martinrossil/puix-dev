import { DisplayContainer, Theme, IconElement, Color } from 'puix';
import IIconElement from 'puix/dist/interfaces/IIconElement';
import Icons from './Icons';

export default class IconBox extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'IconBox';
        this.backgroundColor = Theme.PRIMARY_COLOR.index[4];
        this.layout.padding = 8;
        this.cornerRadius = 8;
        this.addElement(this.iconElement);
    }

    protected get iconElement(): IIconElement {
        const iconElement: IIconElement = new IconElement();
        iconElement.setSize(38, 38);
        iconElement.icon = Icons.PUIX;
        iconElement.color = Color.WHITE;
        return iconElement;
    }
}
customElements.define('icon-box', IconBox);

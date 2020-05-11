import { DisplayContainer, Theme } from 'puix';
import StatusChip from './StatusChip';

export default class ActionBar extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'ActionBar';
        this.setSize(400, 50);
        this.x = -28;
        this.y = 175 - 28 - 50;
        this.backgroundColor = Theme.NEUTRAL_COLOR.index[0];
        this.addElement(new StatusChip());
    }
}
customElements.define('action-bar', ActionBar);

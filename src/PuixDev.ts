import { ApplicationElement, IScrollContainer, ScrollContainer, ScrollPolicy, IDisplayElement, HSL, DisplayElement, HorizontalLayout, VerticalAlign } from 'puix';

export default class PuixDev extends ApplicationElement {
    constructor() {
        super();
        this.name = 'PuixDev';
        this.addElement(this.scrollContainer);
    }

    private _scrollContainer!: IScrollContainer;

    protected get scrollContainer(): IScrollContainer {
        if (!this._scrollContainer) {
            this._scrollContainer = new ScrollContainer();
            this._scrollContainer.horizontalCenter = 0;
            this._scrollContainer.verticalCenter = 0;
            this._scrollContainer.height = 400;
            this._scrollContainer.percentWidth = 75;
            this._scrollContainer.backgroundColor = HSL.WHITE;
            this._scrollContainer.shadow = this.theme.shadows.large;
            this._scrollContainer.horizontalScrollPolicy = ScrollPolicy.ON;
            for (let i = 0; i < 2; i++) {
                const d: IDisplayElement = new DisplayElement();
                d.width = 200;
                d.backgroundColor = HSL.BLUE_GREY_200;
                this.scrollContainer.addElement(d);
            }
            this._scrollContainer.layout = new HorizontalLayout(16, VerticalAlign.FILL);
            this._scrollContainer.layout.padding = 16;
        }
        return this._scrollContainer;
    }
}
customElements.define('puix-dev', PuixDev);

import { ApplicationElement, AnchorLayout, IShapeElement, ShapeElement, AnchorLayoutData, IShadowFilter, ShadowFilter, HSL, CornerType } from 'puix';

export default class PuixDev extends ApplicationElement {
    constructor() {
        super();
        this.name = 'PuixDev';
        this.backgroundColor = this.theme.colors.neutral.c50;
        this.layout = new AnchorLayout();
        this.shp.setSize(150, 150);
        this.shp.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        this.shp.fillColor = HSL.CYAN_500;
        this.shp.cornerSize = 75;
        this.shp.cornerType = CornerType.CUT;
        this.shp.filter = this.sf;
        this.addElement(this.shp);
    }

    private sf: IShadowFilter = new ShadowFilter(0, 10, 10, HSL.CYAN_900, 0.3);

    private shp: IShapeElement = new ShapeElement();
}
customElements.define('puix-dev', PuixDev);

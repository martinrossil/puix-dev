import { ApplicationElement, AnchorLayout, IShapeElement, ShapeElement, AnchorLayoutData, IShadowFilter, ShadowFilter, HSL, CornerType } from 'puix';

export default class PuixDev extends ApplicationElement {
    constructor() {
        super();
        this.name = 'PuixDev';
        this.backgroundColor = this.theme.colors.neutral.c50;
        this.layout = new AnchorLayout();
        const shp: IShapeElement = new ShapeElement();
        shp.setSize(150, 150);
        shp.layoutData = new AnchorLayoutData(NaN, NaN, NaN, NaN, 0, 0);
        shp.fillColor = HSL.CYAN_500;
        shp.cornerSize = 75;
        shp.cornerType = CornerType.CUT;
        const sf: IShadowFilter = new ShadowFilter(0, 10, 10, HSL.CYAN_900, 0.3);
        shp.filter = sf;
        this.addElement(shp);
    }
}
customElements.define('puix-dev', PuixDev);

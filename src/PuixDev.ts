import { ApplicationElement, ITextElement, TextElement, WhiteSpace, AnchorLayout, Theme, Color, IDisplayContainer, DisplayContainer, ISvgElement, SvgElement, Icon, Overflow, IconElement, FontWeight } from 'puix';
import IIconElement from 'puix/dist/interfaces/IIconElement';
export default class PuixDev extends ApplicationElement {
    constructor() {
        super();
        Theme.NEUTRAL_COLOR = new Color(217, 10);
        Theme.PRIMARY_COLOR = new Color(234);
        this.backgroundColor = Theme.NEUTRAL_COLOR.index[0];
        this.name = 'PuixDev';
        this.layout = new AnchorLayout();
        const appBar: IDisplayContainer = new DisplayContainer();
        appBar.percentWidth = 100;
        appBar.height = 64;
        appBar.backgroundColor = Theme.NEUTRAL_COLOR.index[7];
        this.addElement(appBar);
        const se: ISvgElement = new SvgElement();
        se.horizontalCenter = 0;
        se.verticalCenter = -100;
        se.pathData = Icon.INSERT_CHART;
        se.fillColor = Theme.PRIMARY_COLOR.index[4];
        se.strokeColor = Theme.PRIMARY_COLOR.index[7];
        se.strokeWidth = 1;
        se.setSize(100, 100);
        const card: IDisplayContainer = new DisplayContainer();
        card.setSize(400, 175);
        card.horizontalCenter = 0;
        card.verticalCenter = 0;
        card.backgroundColor = Color.WHITE;
        card.cornerRadius = 8;
        card.z = 1.2;
        card.layout.padding = 28;
        card.overflow = Overflow.HIDDEN;
        const iconBox: IDisplayContainer = new DisplayContainer();
        iconBox.backgroundColor = Theme.PRIMARY_COLOR.index[4];
        iconBox.layout.padding = 8;
        iconBox.cornerRadius = 8;
        const ie: IIconElement = new IconElement();
        ie.setSize(38, 38);
        ie.icon = Icon.INSERT_CHART;
        ie.color = Color.WHITE;
        iconBox.addElement(ie);
        card.addElement(iconBox);
        const totalSub: ITextElement = new TextElement();
        totalSub.text = 'Total Subscribers';
        totalSub.whiteSpace = WhiteSpace.NO_WRAP;
        totalSub.x = 76;
        totalSub.y = 4;
        totalSub.fontWeight = FontWeight.BOLD;
        totalSub.color = Theme.NEUTRAL_COLOR.index[4];
        const valText: ITextElement = new TextElement();
        valText.text = '71,897';
        valText.whiteSpace = WhiteSpace.NO_WRAP;
        valText.x = 76;
        valText.y = 26;
        valText.fontWeight = FontWeight.BOLD;
        valText.fontSize = 34;
        valText.color = Theme.NEUTRAL_COLOR.index[9];
        const chip: IDisplayContainer = new DisplayContainer();
        chip.backgroundColor = Theme.SUCCESS_COLOR.index[1]
        chip.layout.paddingTop = chip.layout.paddingBottom = 7;
        chip.layout.paddingLeft = chip.layout.paddingRight = 10;
        chip.cornerRadius = 12;
        chip.x = 282;
        chip.y = 112;
        const chipText: ITextElement = new TextElement();
        chipText.text = 'Inactive';
        chipText.color = Theme.SUCCESS_COLOR.index[6];
        chipText.fontSize = 12;
        chipText.fontWeight = FontWeight.SEMI_BOLD;
        chip.addElement(chipText);
        const botBar: IDisplayContainer = new DisplayContainer();
        botBar.setSize(400, 50);
        botBar.x = -28;
        botBar.y = 175 - 28 - 50;
        botBar.backgroundColor = Theme.NEUTRAL_COLOR.index[0];
        card.addElement(totalSub);
        card.addElement(valText);
        card.addElement(botBar);
        card.addElement(chip);
        this.addElement(card);
    }
}
customElements.define('puix-dev', PuixDev);

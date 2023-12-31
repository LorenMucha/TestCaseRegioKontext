import { IndicatorImpl } from "./indicator.data";

//generated
export interface ZuUndFortzuegeData {
    "Jahr": number,
    "Kennziffer": number,
    "Name": string,
    "Außenwanderungen Zuzüge insgesamt": number,
    "12051000 Brandenburg an der Havel Zuz": number,
    "12053000 Frankfurt (Oder)  Zuz": number,
    "12060052 Eberswalde  Zuz": number,
    "12061316 Lübben (Spreewald) Zuz": number,
    "12063208 Nauen Zuz": number,
    "12063252 Rathenow Zuz": number,
    "12065100 Gransee Zuz": number,
    "12066196 Lübbenau/Spreewald  Zuz": number,
    "12067144 Fürstenwalde/Spree  Zuz": number,
    "12069017 Beelitz Zuz": number,
    "12069020 Bad Belzig Zuz": number,
    "12072169 Jüterbog Zuz": number,
    "12072232 Luckenwalde Zuz": number,
    "12072477 Zossen Zuz": number,
    "12073008 Angermünde Zuz": number,
    "Fortzüge insgesamt": number,
    "12051000 Brandenburg an der Havel Fort": number,
    "12053000 Frankfurt (Oder)  Fort": number,
    "12060052 Eberswalde  Fort": number,
    "12061316 Lübben (Spreewald) Fort": number,
    "12063208 Nauen Fort": number,
    "12063252 Rathenow Fort": number,
    "12065100 Gransee Fort": number,
    "12066196 Lübbenau/Spreewald  Fort": number,
    "12067144 Fürstenwalde/Spree  Fort": number,
    "12069017 Beelitz Fort": number,
    "12069020 Bad Belzig Fort": number,
    "12072169 Jüterbog Fort": number,
    "12072232 Luckenwalde Fort": number,
    "12072477 Zossen Fort": number,
    "12073008 Angermünde Fort": number
}

export class ZuUndFortzuege implements IndicatorImpl {
    url: string = 'zu_fortzuege.json'
    description: string = 'Der Indikator beschreibt die Differenz zwischen Zuzügen aus den Brandenburger Gemeinden in Richtung Berlin und Fortzüge der Berliner:innen nach Brandenburg im Jahr 2021. Dieser Indikator ist wichtig, um die Muster der Bevölkerungsbewegungen zwischen Berlin und den umliegenden Brandenburger Gemeinden zu verstehen. Darüber hinaus bietet er Einblicke in die Attraktivität der Hauptstadtregion, wirtschaftliche Verflechtungen und demografische Trends.'
    title: string = 'Außenwanderungssaldo in den Berliner Prognoseräumen aus den Brandenburger Gemeinden'
}
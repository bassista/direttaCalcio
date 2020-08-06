export enum TEAMS {
    ATALANTA="Atalanta",
    BENEVENTO="Benevento",
    BOLOGNA="Bologna",
    CAGLIARI="Cagliari",
    CROTONE="Crotone",
    FIORENTINA="Fiorentina",
    GENOA="Genoa",
    INTER="Inter",
    JUVENTUS="Juventus", //"Juve"
    LAZIO="Lazio",
    MILAN="Milan",
    NAPOLI="Napoli",
    PARMA="Parma",
    ROMA="Roma", 
    SAMPDORIA="Sampdoria",//"Sampadoria" "Samp"
    SASSUOLO="Sassuolo",
    SPEZIA="Spezia", //DA CONFERMARE
    TORINO="Torino",
    UDINESE="Udinese", //Udine"
    VERONA="Verona" //"Hellas Verona" "Ellas Verona",
}

interface TEAM_METADATA_PRONOMI {
    articolo:string;
    preposizioneSu:string;
    preposizioneAl:string;
    preposizioneDel:string;
}

interface TEAM_METADATA extends TEAM_METADATA_PRONOMI {
    nome:string;
    aliases:string[];
    urlScudetto:string;
}

const BASE_URL_SCUDETTO : string ='https://i.ibb.co/P5kLdBk/'
const SCUDETTO_IMG_FORMAT : string ='.png'

class ilPronomeMetadataTeam implements TEAM_METADATA {
    articolo:string;
    preposizioneSu:string;
    preposizioneAl:string;
    preposizioneDel:string;
    nome:string;
    aliases:string[];
    urlScudetto:string;

    constructor(nome:string,urlScudetto?:string,aliases:string[]=[]) {
        this.articolo='il';
        this.preposizioneSu='sul';
        this.preposizioneAl='al';
        this.preposizioneDel='del';
        this.nome=nome;
        this.aliases=aliases;

        if (urlScudetto===undefined)
            urlScudetto=nome.toLowerCase()
        this.urlScudetto=BASE_URL_SCUDETTO+urlScudetto+SCUDETTO_IMG_FORMAT;
    }
}

export const BENEVENTO_METADATA : TEAM_METADATA = new ilPronomeMetadataTeam(TEAMS.BENEVENTO) //TODO manca png
export const BOlOGNA_METADATA   : TEAM_METADATA = new ilPronomeMetadataTeam(TEAMS.BOLOGNA)
export const CAGLIARI_METADATA  : TEAM_METADATA = new ilPronomeMetadataTeam(TEAMS.CAGLIARI)
export const CROTONE_METADATA   : TEAM_METADATA = new ilPronomeMetadataTeam(TEAMS.CROTONE) //TODO manca png
export const GENOA_METADATA     : TEAM_METADATA = new ilPronomeMetadataTeam(TEAMS.GENOA, 'genoa',['Genova'])
export const INTER_METADATA     : TEAM_METADATA = new ilPronomeMetadataTeam(TEAMS.INTER, 'inter', ['Internazionale'])

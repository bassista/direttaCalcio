import {Collection} from 'lodash'

interface statistichePuntiTeam {
    nomeTeam : string;
    punteggio : number;
    nPartiteGiocate : number;
    nPareggi : number;
    nSconfitte : number;
    nVittorie : number;
    nGsegnati : number;
    nGsubiti : number;
    differenzaReti : number;
}

interface posizioneTeam {
    statisticheTeam : statistichePuntiTeam,
    posizione : number
}

export interface classifica {
    posizioni : posizioneTeam[];
}

export interface teamsPerPosizione {
    statisticheTeams : Collection<statistichePuntiTeam>,
    posizione : number
}

export interface classificaRaggruppataPerPosizione {
    posizioni : teamsPerPosizione[]
}
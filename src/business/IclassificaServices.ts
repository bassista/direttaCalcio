import { classifica, classificaRaggruppataPerPosizione, TEAMS } from '../domain'
import * as _ from "lodash";

export interface IclassificaServices {
    getClassificaSerieA() : classifica
    getClassificaSerieAGroupByPosizione() : classificaRaggruppataPerPosizione
}

export function getClassificaSerieADummy() : classifica {
    return {
        posizioni: [    
                        {
                            statisticheTeam: {
                                                nomeTeam : TEAMS.INTER,
                                                punteggio : 100,
                                                nPartiteGiocate : 6,
                                                nPareggi : 1,
                                                nSconfitte : 2,
                                                nVittorie : 3,
                                                nGsegnati : 10,
                                                nGsubiti : 0,
                                                differenzaReti : 10
                            },
                            posizione : 2  
                        },
                        {
                            statisticheTeam: {
                                                nomeTeam : TEAMS.JUVENTUS,
                                                punteggio : 99,
                                                nPartiteGiocate : 6,
                                                nPareggi : 1,
                                                nSconfitte : 3,
                                                nVittorie : 2,
                                                nGsegnati : 10,
                                                nGsubiti : 9,
                                                differenzaReti : 1    
                            },
                            posizione : 3    
                        },
                        {
                            statisticheTeam: {
                                                nomeTeam : TEAMS.MILAN,
                                                punteggio : 98,
                                                nPartiteGiocate : 6,
                                                nPareggi : 2,
                                                nSconfitte : 4,
                                                nVittorie : 0,
                                                nGsegnati : 5,
                                                nGsubiti : 9,
                                                differenzaReti : -4
                            },
                            posizione : 1
                        },
                    ]
    }
}


export function getClassificaSerieAGroupByPosizioneDummy() : classificaRaggruppataPerPosizione {
    let cl : classifica = getClassificaSerieADummy()
    let result = _(cl.posizioni).groupBy(x => x.posizione)
                                .map((value, key) => ({ posizione: Number(key),
                                                        statisticheTeams: _(value).map(x=>x.statisticheTeam)}))
                                .value();
    console.log(JSON.stringify(result, null, "   "))
    return {
        "posizioni" : result
    }    
}

getClassificaSerieAGroupByPosizioneDummy()
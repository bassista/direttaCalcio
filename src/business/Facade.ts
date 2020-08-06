import { classifica, classificaRaggruppataPerPosizione } from '../domain'
import { getClassificaSerieADummy, getClassificaSerieAGroupByPosizioneDummy } from './IclassificaServices'
import { ClassificaServices } from './ClassificaServices'

const useDummyImplementation : boolean = true

export class Facade {
    static getClassificaSerieA(): classifica {
        if (useDummyImplementation)
            return getClassificaSerieADummy()
        return new ClassificaServices().getClassificaSerieA()
    }
    
    static getClassificaSerieAGroupByPosizione(): classificaRaggruppataPerPosizione {
        if (useDummyImplementation)
            return getClassificaSerieAGroupByPosizioneDummy()
        return new ClassificaServices().getClassificaSerieAGroupByPosizione()
    }

}
import { classifica, classificaRaggruppataPerPosizione } from '../domain'
import { IclassificaServices } from './IclassificaServices'

export class ClassificaServices implements IclassificaServices {
    getClassificaSerieA(): classifica {
        throw new Error("Method not implemented.")
    }
    getClassificaSerieAGroupByPosizione() : classificaRaggruppataPerPosizione {
        throw new Error("Method not implemented.")
    }

}

import { Handler, Intent } from 'jovo-plugin-class-handler';
import { Jovo } from 'jovo-core';
import { Facade } from '../business/Facade'
import { classificaRaggruppataPerPosizione } from '../domain';

const ri = require('@jargon/platform-jovo').ri;

@Handler()
export class ClassificaHandler {
  
    @Intent('ClassificaIntent')
    async classificaSerieA(jovo: Jovo) {
      let c : classificaRaggruppataPerPosizione=Facade.getClassificaSerieAGroupByPosizione()
      //let speechParams = {punti: 1, primi:'inter e juve'};
      //let msg = ri('classificaSerieAprimo', speechParams)
      let punti : number=1
      let numTeams : number=2
      let result : string = await jovo.jargon.rm.render({key : 'classificaSerieAprimo',
                                                         params : {
                                                             punti : punti, 
                                                             primi : 'inter e juve', 
                                                             numTeams : numTeams
                                                          }
                                                        })
      //await jovo.jargon.respond(msg)
      jovo.tell(result)
    }

}
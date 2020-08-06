import { Handler, Intent } from 'jovo-plugin-class-handler';
import { Jovo } from 'jovo-core';

@Handler()
export class ClassificaHandler {

    @Intent()
    LAUNCH(jovo: Jovo) {
      return jovo.toIntent('ClassificaIntent');
    }

}
import { App } from 'jovo-framework';
import { Alexa } from 'jovo-platform-alexa';
import { JovoDebugger } from 'jovo-plugin-debugger';
import { FileDb } from 'jovo-db-filedb';

import { JovoClassHandler } from 'jovo-plugin-class-handler';
import { JargonPlugin } from '@jargon/platform-jovo';


// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

app.use(
  new Alexa(),
  new JovoDebugger(),
  new FileDb(),
  new JovoClassHandler(),
  new JargonPlugin({projectId:'JP9BD8BFBE7A', contentInterfaceId:'JR6B3A106F49',tag:'',endpoint:'aws-eu-west-1',logTimings:true})
);

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

export { app };

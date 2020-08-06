// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

const config = {
  logging: true,

  intentMap: {
    'AMAZON.StopIntent': 'END',
  },
  
  plugin: {
    JovoClassHandler: {
      handlers: [__dirname + '/**/*.handler.{ts,js}'],
    },
  },

  db: {
    FileDb: {
      pathToFile: './../../db/db.json',
    },
  },
};

export = config;

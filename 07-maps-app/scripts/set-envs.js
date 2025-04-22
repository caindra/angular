const {writeFileSync, mkdirSync} = require('fs');

require('dotenv').config();

const targetPath = '.src/environments/environment.ts'
const targetPathDev = '.src/environments/environment.development.ts'

if(!process.env['MAPBOX_KEY']){
  throw new Error('MAPBOX_KEY is not set');
}

const envFileContent = `
 
`;

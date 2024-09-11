const { writeFileSync } = require('fs');

// Obteniendo las variables de entorno de Netlify
const apiKey = process.env.API_KEY || '';
const emailServiceUrl = process.env.URL_SERV_EMAIL || '';

const targetPath = './src/environments/environment.prod.ts';

// El contenido que se escribirá en el archivo de entorno
const envConfigFile = `
export const environment = {
  production: true,
  API_KEY: '${apiKey}',
  URL_SERV_EMAIL: '${emailServiceUrl}'
};
`;

// Escribiendo el archivo de entorno
writeFileSync(targetPath, envConfigFile);
console.log(`Environment file generated at ${targetPath}`);

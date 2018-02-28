// The file contents for the current environment will overwrite these during
// build. The build system defaults to the dev environment which uses
// `environment.ts`, but if you do `ng build --env=prod` then
// `environment.prod.ts` will be used instead. The list of which env maps to
// which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCrFUSoLxei3vOf6LXH6bLhtV7yWXl0zwA',
    authDomain: 'citiskope-dev.firebaseapp.com',
    databaseURL: 'https://citiskope-dev.firebaseio.com',
    projectId: 'citiskope-dev',
    storageBucket: 'citiskope-dev.appspot.com',
    messagingSenderId: '147360091648'
  },
  citiskopeApi: {
    baseUrl: 'http://dev-api.citiskope.com'
  }
};

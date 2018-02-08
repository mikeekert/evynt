// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBX0xBRAKTIeJnrURAjpDIBYMGbJLrGfKU",
    authDomain: "citiskope-local.firebaseapp.com",
    databaseURL: "https://citiskope-local.firebaseio.com",
    projectId: "citiskope-local",
    storageBucket: "citiskope-local.appspot.com",
    messagingSenderId: "252141486095"
  },
  citiskopeApi: {
    baseUrl: "http://localhost:8080"
  }
};

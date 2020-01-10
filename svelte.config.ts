


//  I M P O R T S

import {
  createEnv,
  preprocess as svelteProcess,
  readConfigFile
} from "svelte-ts-preprocess";

//  U T I L

const env = createEnv();



//  E X P O R T

export const preprocess = svelteProcess({
  compilerOptions: {
    ...readConfigFile(env),
    allowNonTsExtensions: true
  },
  env
});

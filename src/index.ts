/* global document */



//  U T I L

import App from "./components/App.svelte";



//  P R O G R A M

const app = new App({
  props: {
    name: "World"
  },
  target: document.body
});



//  E X P O R T

export default app;

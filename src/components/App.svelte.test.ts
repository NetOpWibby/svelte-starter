/* global document */



//  I M P O R T

import intern from "intern";

//  U T I L S

import App from "./App.svelte";

const { describe, it } = intern.getPlugin("interface.bdd");
const { expect } = intern.getPlugin("chai");



//  P R O G R A M

describe("App Component", () => {
  it("should render", () => {
    const el = document.createElement("div");

    new App({
      props: {
        name: "World"
      },
      target: el
    });

    expect(el.textContent).to.equal("Hello World");
  });
});

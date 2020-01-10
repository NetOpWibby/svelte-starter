


//  I M P O R T

import intern from "intern";

//  U T I L

import target from "./";

const { describe, it } = intern.getPlugin("interface.bdd");
const { expect } = intern.getPlugin("chai");



//  P R O G R A M

describe("Entry Script", () => {
  it("Target dom element should contain textContent", () => {
    expect(target.textContent).to.not.be.null; // https://www.chaijs.com/api/bdd/#method_null
  });
});

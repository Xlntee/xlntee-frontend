import App from "src/App";

describe("App.cy.tsx", () => {
  it("component mount", () => {
    cy.mount(<App />);
  });
});

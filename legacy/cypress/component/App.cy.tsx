import App from "src/app/App";

describe("App.cy.tsx", () => {
  it("component mount", () => {
    cy.mount(<App />);
  });
});

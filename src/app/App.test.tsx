import App from "./App";
import { render } from "../test/test-utils";

describe("App component test", () => {
  it("render App.tsx", () => {
    render(<App />);
  });
});

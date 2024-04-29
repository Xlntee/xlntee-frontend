import App from "./App";
import { render, screen, userEvent } from "./utils/test-utils";

describe("App component test", () => {
  it("render App.tsx", () => {
    render(<App />);
  });
});

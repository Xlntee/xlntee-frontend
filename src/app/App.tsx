import AppRouter from "src/app/routing/AppRouter";
import Providers from "./providers/providers";

function App(): JSX.Element {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;

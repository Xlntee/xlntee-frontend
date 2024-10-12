import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material";

import store, { persistor } from "./store/store";

import { defaultTheme } from "src/shared/themes/themes";
import AppRouter from "src/app/routing/AppRouter";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import "src/i18n";

if (import.meta.env.MODE === "production") {
  disableReactDevTools();
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <AppRouter />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

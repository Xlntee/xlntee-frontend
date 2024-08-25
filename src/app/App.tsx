import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material";

import store, { persistor } from "./store/store";

import { defaultTheme } from "src/shared/themes/themes";
import AppRouter from "src/app/routing/AppRouter";

import "src/i18n";

function App() {
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

import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "../shared/themes/themes";
import AppRouter from "src/app/routing/AppRouter";
import { PersistGate } from "redux-persist/integration/react";
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

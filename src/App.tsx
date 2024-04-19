import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./themes/themes";
import AppRouter from "components/routing/AppRouter";
import { PersistGate } from "redux-persist/integration/react";

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

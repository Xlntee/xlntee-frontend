import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material";

import store, { persistor } from "./store/store";

import { defaultTheme } from "src/shared/themes/themes";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import "src/i18n";

if (import.meta.env.MODE === "production") {
  disableReactDevTools();
}

function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default Providers;

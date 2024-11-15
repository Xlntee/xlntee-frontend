import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import { ThemeProvider } from "@mui/material";

import store, { persistor } from "./store/store";

import { AuthProvider } from "./context";

import { defaultTheme } from "src/shared/themes/themes";

import "src/i18n";

if (import.meta.env.MODE === "production") {
  disableReactDevTools();
}

function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Provider store={store}>
      <AuthProvider>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </PersistGate>
      </AuthProvider>
    </Provider>
  );
}

export default Providers;
